# Human IQ Post-Submit Operating Flow

## Goal
Move every Growth & Conversion Review submission through a simple, founder-readable path without overbuilding operations.

## Core rule
Review first. Recommend the right next step second.

## Submission flow
1. A submission arrives through the custom Growth & Conversion Review intake.
2. Check the submission inbox and tracker the same business day.
3. Score the lead using the review rubric.
4. Assign one internal response tier:
   - Strong
   - Medium
   - Weak
5. Select exactly one primary engagement path:
   - Not a Fit Yet
   - Growth & Conversion Audit
   - Strategy + Implementation Sprint
   - Ongoing Optimization Partner
6. Operator reviews the recommendation before anything is sent.
7. Send the right async recommendation or proposal.
8. Update status and next action in the tracker.

Use `docs/ops/founder-review-checklist.md` as the day-to-day inbox handling checklist.

## Response SLA
- Strong lead: same business day
- Medium lead: within 24 hours
- Weak lead: within 2 business days

## Triage rules
### Strong lead
Use when most of these are true:
- established business
- clear demand already exists
- obvious revenue leakage in follow-up, qualification, sales handling, or systems
- urgent problem
- open to investment

### Medium lead
Use when:
- traction exists but problem definition is incomplete
- urgency is real but not immediate
- likely fit for a paid audit-first path

### Weak lead
Use when:
- low readiness
- low urgency
- weak commercial signal
- no clear next step yet

## Primary path rules
- Every lead must be routed to one primary path only.
- The primary path is more important than the tier.
- The tier controls response speed.
- The primary path controls what Human IQ sends next.
- The free Review should diagnose and recommend. It should not hand over a full implementation roadmap for free.

## Status flow
- New Intake
- Under Review
- Qualified
- Audit Recommended
- Proposal Sent
- Follow-Up
- Accepted
- Onboarding
- Active Client
- Nurture / Not Fit

## Calls
- A call can support clarification, closing, or onboarding.
- A call is optional in the default operating model.
- Do not require a call before a prospect can approve a proposal or pay a deposit.

## Founder daily rhythm
### Morning
- check submissions
- classify new leads
- review strong leads first
- send async recommendations that are ready to go

### Midday
- update tracker
- prepare any proposal or onboarding notes that still need operator review

### End of day
- make sure no strong lead is still waiting
- move medium leads forward
- close the loop on anything marked Follow-Up

## Repo integration note
`lib/humaniq-review-ops.js` is now available as a lean scoring helper for the custom intake. The intake can attach its evaluation summary to the submission payload, but the operating flow stays founder-led and readable.
