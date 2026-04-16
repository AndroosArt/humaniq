# Human IQ Acceptance Workflow

## Purpose
Define the default commercial path from proposal to accepted client so Human IQ can close business asynchronously without overbuilding process.

## What counts as acceptance
Treat a lead as `Accepted` only when both of these are true:

1. The client has clearly approved the recommended engagement.
2. The required first payment step has been completed, or payment terms have been explicitly confirmed.

## Default acceptance path
This is the default Human IQ path for paid work:

1. Send the recommendation or proposal.
2. Ask the client to reply with written approval.
3. Send the invoice or deposit request.
4. Confirm payment has been received.
5. Send the welcome email and intake request.
6. Move the lead to `Accepted`, then `Onboarding`.

This keeps acceptance simple, premium, and low-friction for launch.

## Default by engagement type
### Growth & Conversion Audit
- Default approval: written email approval
- Default payment: first invoice paid before work begins

### Strategy + Implementation Sprint
- Default approval: written email approval or signed proposal if scope is more detailed
- Default payment: deposit paid before project start

### Ongoing Optimization Partner
- Default approval: signed proposal preferred
- Default payment: first monthly payment before activation

## Fallback acceptance paths
Use one of these only when needed:

### Written approval only
Use when:
- the scope is simple and bounded
- the engagement is low-friction
- there is no commercial ambiguity

### Signed proposal
Use when:
- scope needs tighter commercial confirmation
- there are multiple stakeholders
- the engagement is a sprint or ongoing partner engagement
- the operator wants cleaner approval records

### Invoice or deposit first
Use when:
- the buyer is ready to move immediately
- the simplest proof of commitment is payment
- written approval is already clear in the email thread

## When each acceptance method is appropriate
### Written approval is enough when
- the path is a straightforward audit
- scope is already clear
- the operator is comfortable that expectations are aligned

### Signed proposal is preferred when
- the work includes meaningful implementation
- deliverables or timing need firmer confirmation
- the client has procurement or internal approval requirements

### Invoice or deposit is the commercial trigger when
- Human IQ should not start work until money is in
- the engagement has real delivery load
- payment is the cleanest point of commitment

## Operator checklist before marking `Accepted`
1. Confirm the lead has exactly one approved engagement path.
2. Confirm the recommendation or proposal sent matches the approved scope.
3. Confirm the client has replied with approval, signed, or otherwise clearly said yes.
4. Confirm the invoice, deposit, or first payment step is complete or explicitly confirmed.
5. Confirm there are no open scope questions that would block onboarding.
6. Confirm the next onboarding email and intake request are ready to send.
7. Update tracker status and next action.

## Do not mark `Accepted` when
- the client is only asking questions
- the client wants a call before deciding
- payment is still unresolved for work that should not start unpaid
- scope is still too unclear to onboard responsibly

## Status handling
- `Proposal Sent` while waiting for approval
- `Follow-Up` if a reminder is needed
- `Accepted` once commercial approval is clear
- `Onboarding` once welcome email and intake request have been sent

## Core rule
Human IQ should not require a sales call before acceptance if the buyer is ready to approve in writing and complete the payment step.
