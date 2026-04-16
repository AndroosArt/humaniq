# Human IQ Post-Submit Operating Flow

## Goal
Move every Growth & Conversion Review submission through a simple, founder-readable path without overbuilding operations.

## Core rule
Review first. Blueprint conversation second.

## Submission flow
1. A submission arrives through the custom Growth & Conversion Review intake.
2. Check the submission inbox and tracker the same business day.
3. Score the lead using the review rubric.
4. Assign one of three tiers:
   - Strong
   - Medium
   - Weak
5. Send the right first follow-up.
6. Decide whether to invite a Practical AI Blueprint conversation.
7. Update status and next action in the tracker.

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
- likely fit for strategy / audit first

### Weak lead
Use when:
- low readiness
- low urgency
- weak commercial signal
- no clear next step yet

## Status flow
- New
- Needs review
- Qualified
- Not a fit
- Invited to call
- Call booked
- Review delivered
- Proposal sent
- Won
- Lost
- Follow-up pending

## When to invite a Practical AI Blueprint conversation
Invite when the lead is strong, or when the review clearly shows a high-opportunity improvement path and the prospect is open to acting soon.

## Founder daily rhythm
### Morning
- check submissions
- classify new leads
- send strong-lead follow-ups first

### Midday
- update tracker
- prepare any strategy conversations

### End of day
- make sure no strong lead is still waiting
- move medium leads forward
- close the loop on anything marked Follow-up pending

## Repo integration note
`lib/humaniq-review-ops.js` is now available as a lean scoring helper for the custom intake. The intake can attach its evaluation summary to the submission payload, but the operating flow stays founder-led and readable.
