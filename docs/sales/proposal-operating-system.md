# Human IQ Proposal Operating System

## Purpose
Define a lean, founder-readable operating model for moving a Growth & Conversion Review submission from intake to acceptance and onboarding without requiring a sales call.

## Core operating model
The default Human IQ path is:

1. Intake submitted
2. Operator reviews and scores lead
3. One primary engagement path is selected
4. Human-reviewed recommendation or proposal is sent asynchronously
5. Prospect accepts asynchronously
6. Onboarding begins
7. Delivery starts
8. Ongoing optimization is offered when earned

## Core rules
- The default path is asynchronous.
- Every lead is routed to exactly one primary path.
- The operator reviews every recommendation before it is sent.
- The free Review diagnoses the business. It does not give away a full implementation roadmap.
- A call can support closing or onboarding, but a call is not required to accept.

## The main async conversion path
### Step 1. Intake arrives
- Intake comes through the Growth & Conversion Review form.
- Submission is logged in the tracker and marked `New Intake`.

### Step 2. Operator reviews
- Operator reads the intake, checks the score, confirms the primary problem class, and selects one primary engagement path.
- Operator uses the routing rules in `docs/sales/lead-routing-rules.md`.
- Status moves to `Under Review` and then to the correct qualified state.

### Step 3. Recommendation is prepared
- Operator prepares one concise recommendation using the proposal template and the matching path-specific outcome template.
- Recommendation should explain:
  - what is happening
  - where revenue appears to be leaking
  - what Human IQ recommends next
  - what the client should do to accept

### Step 4. Recommendation is sent
- Default delivery is email.
- For `Not a Fit Yet`, send a short, respectful response.
- For all paid paths, send a concise recommendation or proposal with one clear next step.
- Status moves to `Proposal Sent`.

### Step 5. Client accepts
- Acceptance can happen by:
  - reply email with written approval
  - signed proposal
  - paid deposit or first invoice
- Use whichever is simplest for the current stage of the business.
- Once commercial acceptance is clear, status moves to `Accepted`.

### Step 6. Onboarding starts
- Send onboarding email, payment details, and required intake items.
- Move to `Onboarding` only after acceptance is clear.

## Operator role
The operator is responsible for:

- reviewing each intake within the target response window
- confirming diagnosis quality before anything is sent
- selecting one primary path only
- making sure scope and pricing logic are sensible
- protecting the premium positioning of Human IQ
- keeping free advice bounded
- sending the recommendation or proposal
- advancing accepted clients into onboarding

## What the free Review should and should not do
### The Review should do
- show the client that Human IQ understands the business
- identify likely revenue leakage
- frame the most sensible next step
- create confidence in the recommendation

### The Review should not do
- map the full implementation plan in detail
- hand over a free blueprint that replaces paid work
- provide tactical step-by-step build instructions
- create custom delivery work before acceptance

## Acceptance path
Use a simple commercial sequence:

1. Send recommendation or proposal
2. Ask for written approval or signature
3. Collect deposit or first payment if required
4. Send onboarding materials
5. Start delivery

Human IQ should not wait for a sales call if the buyer is ready to move forward in writing.

## When a call is optional vs required
### Optional
- The recommendation is clear and low-friction.
- Scope is already well-bounded.
- Buyer is commercially ready and comfortable deciding asynchronously.
- Engagement is an audit or a defined sprint with a simple acceptance path.

### Recommended but not required
- The buyer has a few commercial questions.
- There are minor scope decisions to confirm.
- There is internal stakeholder alignment still happening.

### Required
- Scope is materially unclear.
- Multiple business units, offers, or stakeholders are involved.
- The proposed engagement would be risky to sell without live clarification.
- The buyer is leaning toward an ongoing partner engagement and the operating model needs discussion.

## Suggested response windows
- Strong fit: same business day
- Moderate fit: within 24 hours
- Low-fit or nurture: within 2 business days

## Minimum assets used in this system
- `docs/sales/lead-routing-rules.md`
- `docs/sales/internal-review-checklist.md`
- `docs/sales/lead-status-pipeline.md`
- `docs/sales/onboarding-and-maintenance.md`
- `templates/proposals/human-iq-proposal-template.md`
- `templates/proposals/path-specific-outcomes.md`
- `templates/emails/proposal-follow-up-sequence.md`
