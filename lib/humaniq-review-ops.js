(function (global) {
  'use strict';

  const RESPONSE_SLA = {
    strong: 'same_business_day',
    medium: 'within_24_hours',
    weak: 'within_2_business_days'
  };

  const TRACKER_COLUMNS = [
    'Date submitted',
    'Business name',
    'Website',
    'Primary contact',
    'Email',
    'Phone',
    'Industry',
    'Team size',
    'Monthly revenue range',
    'Lead source',
    'Monthly lead volume',
    'Primary problem category',
    'Secondary problem category',
    'Fit score',
    'Revenue opportunity level',
    'Urgency',
    'Investment range',
    'Engagement recommendation',
    'Lead tier',
    'Response SLA',
    'Offer Blueprint conversation',
    'Status',
    'Owner',
    'Next action',
    'Notes'
  ];

  function normalizeString(value) {
    return String(value || '').trim();
  }

  function lower(value) {
    return normalizeString(value).toLowerCase();
  }

  function includesAny(value, needles) {
    const haystack = lower(value);
    return needles.some((needle) => haystack.includes(needle));
  }

  function toArray(value) {
    if (Array.isArray(value)) return value.map(normalizeString).filter(Boolean);
    if (typeof value === 'string') {
      return value
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);
    }
    return [];
  }

  function pick(payload, keys) {
    for (const key of keys) {
      const value = payload[key];
      if (value !== undefined && value !== null && String(value).trim() !== '') {
        return value;
      }
    }
    return '';
  }

  function scoreRevenueBusinessMaturity(payload) {
    const revenue = lower(pick(payload, ['monthlyRevenueRange', 'revenueRange']));
    const teamSize = lower(pick(payload, ['teamSize']));

    if (includesAny(revenue, ['$250k+', '250k+', '100k–250k', '100k-250k']) || includesAny(teamSize, ['16–50', '16-50', '50+'])) {
      return 5;
    }
    if (includesAny(revenue, ['$50k–$100k', '$50k-$100k', '$25k–$50k', '$25k-$50k', '25k–50k', '25k-50k', '50k–100k', '50k-100k']) || includesAny(teamSize, ['6–15', '6-15', '2–5', '2-5'])) {
      return 3;
    }
    return 1;
  }

  function scoreLeadVolumePotential(payload) {
    const leadVolume = lower(pick(payload, ['monthlyLeadVolume', 'newLeadsPerMonth']));
    const enoughLeads = lower(pick(payload, ['enoughLeads']));

    if (includesAny(leadVolume, ['100+', '51–100', '51-100'])) return 5;
    if (includesAny(leadVolume, ['26–50', '26-50', '11–25', '11-25'])) return 3;
    if (enoughLeads === 'yes') return 3;
    return 1;
  }

  function scoreUrgency(payload) {
    const urgency = lower(pick(payload, ['urgency']));
    const looking = lower(pick(payload, ['lookingForSupport']));

    if (urgency === 'immediate priority' || looking === 'yes, immediately') return 5;
    if (urgency === 'important this quarter' || looking === 'yes, soon' || looking === 'maybe') return 3;
    return 1;
  }

  function scoreProcessReadiness(payload) {
    const pipeline = lower(pick(payload, ['pipelineOrganization']));
    const qualification = lower(pick(payload, ['definedQualificationProcess']));
    const followUpConsistency = lower(pick(payload, ['followUpConsistency']));

    if (pipeline === 'very organized' && qualification === 'yes' && followUpConsistency === 'yes') return 5;
    if (['somewhat organized', 'disorganized'].includes(pipeline) || qualification === 'somewhat' || followUpConsistency === 'mostly') return 3;
    return 1;
  }

  function scoreBudgetReadiness(payload) {
    const budget = lower(pick(payload, ['investmentRange', 'budgetRange']));

    if (includesAny(budget, ['$10,000+', '$5,000–$10,000', '$5,000-$10,000', '10,000+', '5,000–10,000', '5,000-10,000'])) return 5;
    if (includesAny(budget, ['$2,500–$5,000', '$2,500-$5,000', '2,500–5,000', '2,500-5,000', 'not sure'])) return 3;
    return 1;
  }

  function classifyProblems(payload) {
    const enoughLeads = lower(pick(payload, ['enoughLeads']));
    const unqualified = lower(pick(payload, ['unqualifiedLeadsReachCalls', 'unqualifiedLeads']));
    const responseSpeed = lower(pick(payload, ['responseSpeed']));
    const followUpConsistency = lower(pick(payload, ['followUpConsistency']));
    const pipeline = lower(pick(payload, ['pipelineOrganization']));
    const blocker = lower(pick(payload, ['biggestBlocker']));
    const priority = lower(pick(payload, ['priority90Days', 'topGrowthPriority']));

    const scores = {
      'Lead generation problem': 0,
      'Qualification problem': 0,
      'Follow-up problem': 0,
      'Sales process problem': 0,
      'Systems problem': 0
    };

    if (enoughLeads === 'no' || priority === 'more leads') scores['Lead generation problem'] += 3;
    if (enoughLeads === 'somewhat') scores['Lead generation problem'] += 1;

    if (unqualified === 'often') scores['Qualification problem'] += 3;
    if (unqualified === 'sometimes' || priority === 'better-quality leads') scores['Qualification problem'] += 2;

    if (['1–2 days', '1-2 days', '3+ days', 'it varies a lot'].includes(responseSpeed)) scores['Follow-up problem'] += 3;
    if (followUpConsistency === 'no') scores['Follow-up problem'] += 3;
    if (priority === 'faster follow-up' || priority === 'more booked appointments') scores['Follow-up problem'] += 2;

    if (priority === 'better close rate') scores['Sales process problem'] += 3;
    if (includesAny(blocker, ['close', 'conversion', 'sales process', 'proposal'])) scores['Sales process problem'] += 2;

    if (pipeline === 'disorganized' || pipeline === 'we do not really have a system') scores['Systems problem'] += 3;
    if (priority === 'better systems and visibility') scores['Systems problem'] += 3;
    if (includesAny(blocker, ['visibility', 'tracking', 'crm', 'system', 'ownership'])) scores['Systems problem'] += 2;

    const ordered = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .filter(([, score]) => score > 0)
      .map(([label]) => label);

    return {
      primary: ordered[0] || 'Systems problem',
      secondary: ordered[1] || ''
    };
  }

  function classifyOpportunity(payload, fitScore, problems) {
    const leadVolume = lower(pick(payload, ['monthlyLeadVolume', 'newLeadsPerMonth']));
    const responseSpeed = lower(pick(payload, ['responseSpeed']));
    const unqualified = lower(pick(payload, ['unqualifiedLeadsReachCalls', 'unqualifiedLeads']));
    const pipeline = lower(pick(payload, ['pipelineOrganization']));

    const highVolume = includesAny(leadVolume, ['100+', '51–100', '51-100', '26–50', '26-50']);
    const slowResponse = ['1–2 days', '1-2 days', '3+ days', 'it varies a lot'].includes(responseSpeed);
    const weakQualification = ['often', 'sometimes'].includes(unqualified);
    const weakSystems = ['disorganized', 'we do not really have a system'].includes(pipeline);

    if (fitScore >= 18 && (highVolume || slowResponse || weakQualification || weakSystems)) return 'High';
    if (fitScore >= 10 || problems.primary) return 'Medium';
    return 'Low';
  }

  function recommendEngagement(payload, fitScore, opportunityLevel) {
    const urgency = lower(pick(payload, ['urgency']));
    const looking = lower(pick(payload, ['lookingForSupport']));
    const budget = lower(pick(payload, ['investmentRange', 'budgetRange']));

    if (fitScore <= 8 || urgency === 'exploring options' && looking === 'just exploring') {
      return 'Not a fit yet';
    }

    if (opportunityLevel === 'High' && (looking === 'yes, immediately' || looking === 'yes, soon') && !includesAny(budget, ['under $2,500'])) {
      return 'Strategy + implementation sprint';
    }

    if (opportunityLevel === 'High' && fitScore >= 20) {
      return 'Ongoing optimization partner';
    }

    return 'Strategy / audit only';
  }

  function leadTier(fitScore, opportunityLevel, engagement) {
    if (engagement === 'Ongoing optimization partner' || engagement === 'Strategy + implementation sprint' || (fitScore >= 18 && opportunityLevel === 'High')) return 'strong';
    if (engagement === 'Strategy / audit only' || fitScore >= 10) return 'medium';
    return 'weak';
  }

  function responseSlaForTier(tier) {
    return RESPONSE_SLA[tier] || RESPONSE_SLA.medium;
  }

  function csvEscape(value) {
    const normalized = String(value ?? '');
    if (/[",\n]/.test(normalized)) {
      return `"${normalized.replace(/"/g, '""')}"`;
    }
    return normalized;
  }

  function blueprintInviteDecision(evaluation) {
    return evaluation.tier === 'strong' || evaluation.engagementRecommendation === 'Strategy + implementation sprint' || evaluation.engagementRecommendation === 'Ongoing optimization partner';
  }

  function buildFollowUpMessage(evaluation) {
    const fullName = normalizeString(evaluation.contactName || 'there');
    const firstName = fullName.split(' ')[0] || fullName;
    const business = normalizeString(evaluation.businessName || 'your business');
    const greeting = `Hi ${firstName},`;

    if (evaluation.tier === 'strong') {
      return {
        subject: `Your Human IQ Growth & Conversion Review for ${business}`,
        body: [
          greeting,
          '',
          'Thanks for submitting your Growth & Conversion Review.',
          `We reviewed the signals in your intake and there appears to be a strong opportunity to improve ${evaluation.primaryProblem.toLowerCase()} and convert more demand into revenue.`,
          '',
          'Next step: reply to this message with 2 times that work for a 20-minute strategy conversation. We will use that conversation to confirm priorities and outline what your Practical AI Blueprint should cover first.',
          '',
          'Best,',
          'Human IQ'
        ].join('\n')
      };
    }

    if (evaluation.tier === 'medium') {
      return {
        subject: 'Next step on your Human IQ review',
        body: [
          greeting,
          '',
          'Thanks for submitting your Growth & Conversion Review.',
          `We can already see a few likely friction points around ${evaluation.primaryProblem.replace(' problem', '').toLowerCase()}, and we are preparing a tailored recommendation for the best next step.`,
          '',
          'We will follow up shortly with the clearest recommendation and whether it makes sense to move into a Practical AI Blueprint conversation.',
          '',
          'Best,',
          'Human IQ'
        ].join('\n')
      };
    }

    return {
      subject: 'Thanks for your Human IQ review submission',
      body: [
        greeting,
        '',
        'Thanks for submitting your Growth & Conversion Review.',
        'We received your responses and will review them. If it looks like there is a strong next step, we will follow up with the best recommendation for your business.',
        '',
        'Best,',
        'Human IQ'
      ].join('\n')
    };
  }

  function buildLeadTrackerRow(payload, evaluation) {
    return {
      dateSubmitted: new Date().toISOString(),
      businessName: normalizeString(pick(payload, ['businessName'])),
      website: normalizeString(pick(payload, ['website'])),
      primaryContact: normalizeString(pick(payload, ['contactName', 'primaryContactName', 'name'])),
      email: normalizeString(pick(payload, ['email'])),
      phone: normalizeString(pick(payload, ['phone'])),
      industry: normalizeString(pick(payload, ['industry'])),
      teamSize: normalizeString(pick(payload, ['teamSize'])),
      monthlyRevenueRange: normalizeString(pick(payload, ['monthlyRevenueRange', 'revenueRange'])),
      leadSource: toArray(pick(payload, ['leadSources'])).join(', '),
      monthlyLeadVolume: normalizeString(pick(payload, ['monthlyLeadVolume', 'newLeadsPerMonth'])),
      primaryProblemCategory: evaluation.primaryProblem,
      secondaryProblemCategory: evaluation.secondaryProblem,
      fitScore: evaluation.fitScore,
      revenueOpportunityLevel: evaluation.opportunityLevel,
      urgency: normalizeString(pick(payload, ['urgency'])),
      investmentRange: normalizeString(pick(payload, ['investmentRange', 'budgetRange'])),
      engagementRecommendation: evaluation.engagementRecommendation,
      leadTier: evaluation.tier,
      responseSla: evaluation.responseSla,
      offerBlueprintConversation: evaluation.offerBlueprintConversation ? 'Yes' : 'No',
      status: 'Needs review',
      owner: 'Andrew',
      nextAction: evaluation.tier === 'strong' ? 'Invite to strategy conversation' : 'Send tailored follow-up',
      notes: evaluation.summary
    };
  }

  function leadTrackerRowValues(row) {
    return [
      row.dateSubmitted,
      row.businessName,
      row.website,
      row.primaryContact,
      row.email,
      row.phone,
      row.industry,
      row.teamSize,
      row.monthlyRevenueRange,
      row.leadSource,
      row.monthlyLeadVolume,
      row.primaryProblemCategory,
      row.secondaryProblemCategory,
      row.fitScore,
      row.revenueOpportunityLevel,
      row.urgency,
      row.investmentRange,
      row.engagementRecommendation,
      row.leadTier,
      row.responseSla,
      row.offerBlueprintConversation,
      row.status,
      row.owner,
      row.nextAction,
      row.notes
    ];
  }

  function buildLeadTrackerCsvHeader() {
    return TRACKER_COLUMNS.join(',');
  }

  function buildLeadTrackerCsvRow(row) {
    return leadTrackerRowValues(row).map(csvEscape).join(',');
  }

  function buildFounderReviewSnapshot(payload, evaluation) {
    return [
      `Submitted: ${evaluation.trackerRow.dateSubmitted}`,
      `Business: ${normalizeString(pick(payload, ['businessName']))}`,
      `Contact: ${normalizeString(pick(payload, ['contactName', 'primaryContactName', 'name']))}`,
      `Email: ${normalizeString(pick(payload, ['email']))}`,
      `Lead tier: ${evaluation.tier}`,
      `Fit score: ${evaluation.fitScore}`,
      `Primary problem: ${evaluation.primaryProblem}`,
      `Opportunity level: ${evaluation.opportunityLevel}`,
      `Engagement recommendation: ${evaluation.engagementRecommendation}`,
      `Offer Blueprint conversation: ${evaluation.offerBlueprintConversation ? 'Yes' : 'No'}`,
      `Response SLA: ${evaluation.responseSla}`,
      `Summary: ${evaluation.summary}`,
      `Next action: ${evaluation.trackerRow.nextAction}`
    ].join('\n');
  }

  function summarize(payload, evaluation) {
    const blocker = normalizeString(pick(payload, ['biggestBlocker']));
    const source = toArray(pick(payload, ['leadSources'])).join(', ');
    return [
      `Primary problem: ${evaluation.primaryProblem}.`,
      evaluation.secondaryProblem ? `Secondary problem: ${evaluation.secondaryProblem}.` : '',
      source ? `Lead sources: ${source}.` : '',
      blocker ? `Biggest blocker: ${blocker}.` : '',
      `Recommended path: ${evaluation.engagementRecommendation}.`
    ].filter(Boolean).join(' ');
  }

  function evaluateReviewSubmission(payload) {
    const fitBreakdown = {
      revenueBusinessMaturity: scoreRevenueBusinessMaturity(payload),
      leadVolumePotential: scoreLeadVolumePotential(payload),
      urgency: scoreUrgency(payload),
      processReadiness: scoreProcessReadiness(payload),
      budgetReadiness: scoreBudgetReadiness(payload)
    };

    const fitScore = Object.values(fitBreakdown).reduce((sum, value) => sum + value, 0);
    const problems = classifyProblems(payload);
    const opportunityLevel = classifyOpportunity(payload, fitScore, problems);
    const engagementRecommendation = recommendEngagement(payload, fitScore, opportunityLevel);
    const tier = leadTier(fitScore, opportunityLevel, engagementRecommendation);

    const evaluation = {
      fitBreakdown,
      fitScore,
      primaryProblem: problems.primary,
      secondaryProblem: problems.secondary,
      opportunityLevel,
      engagementRecommendation,
      tier,
      responseSla: responseSlaForTier(tier),
      offerBlueprintConversation: false,
      contactName: normalizeString(pick(payload, ['contactName', 'primaryContactName', 'name'])),
      businessName: normalizeString(pick(payload, ['businessName']))
    };

    evaluation.offerBlueprintConversation = blueprintInviteDecision(evaluation);
    evaluation.summary = summarize(payload, evaluation);
    evaluation.followUp = buildFollowUpMessage(evaluation);
    evaluation.trackerRow = buildLeadTrackerRow(payload, evaluation);
    evaluation.trackerColumns = TRACKER_COLUMNS.slice();
    evaluation.trackerCsvHeader = buildLeadTrackerCsvHeader();
    evaluation.trackerCsvRow = buildLeadTrackerCsvRow(evaluation.trackerRow);
    evaluation.founderReviewSnapshot = buildFounderReviewSnapshot(payload, evaluation);

    return evaluation;
  }

  const api = {
    evaluateReviewSubmission,
    buildFollowUpMessage,
    buildLeadTrackerRow,
    buildLeadTrackerCsvHeader,
    buildLeadTrackerCsvRow,
    TRACKER_COLUMNS,
    RESPONSE_SLA
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  } else {
    global.HumanIQReviewOps = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
