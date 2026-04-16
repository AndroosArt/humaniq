# Human IQ Lead Status Pipeline

## Purpose
Define a simple status model for moving leads from intake through close and into active delivery.

## Recommended pipeline
1. New Intake
2. Under Review
3. Qualified
4. Audit Recommended
5. Proposal Sent
6. Follow-Up
7. Accepted
8. Onboarding
9. Active Client
10. Nurture / Not Fit

## Status definitions
### New Intake
Entry criteria:
- intake submitted
- no review completed yet

Exit criteria:
- operator starts review

### Under Review
Entry criteria:
- operator is reading the intake and scoring the lead

Exit criteria:
- one primary path is selected

### Qualified
Entry criteria:
- lead is commercially viable
- path is either `Strategy + Implementation Sprint` or `Ongoing Optimization Partner`

Exit criteria:
- recommendation or proposal is sent

### Audit Recommended
Entry criteria:
- lead is viable, but the best next step is `Growth & Conversion Audit`

Exit criteria:
- audit recommendation or proposal is sent

### Proposal Sent
Entry criteria:
- recommendation or proposal has been delivered
- clear acceptance instruction has been included

Exit criteria:
- client replies, accepts, declines, or goes quiet long enough to require follow-up

### Follow-Up
Entry criteria:
- proposal was sent and a reminder is now needed

Exit criteria:
- client responds
- client accepts
- client is moved to nurture

### Accepted
Entry criteria:
- written approval, signature, or first payment has been received

Exit criteria:
- onboarding message is sent and intake for delivery begins

### Onboarding
Entry criteria:
- client accepted
- onboarding steps are in motion

Exit criteria:
- required inputs are collected
- work is ready to start

### Active Client
Entry criteria:
- delivery has started

Exit criteria:
- engagement is complete
- client upgrades, renews, or rolls off

### Nurture / Not Fit
Entry criteria:
- lead is not ready now, not a fit, or went cold

Exit criteria:
- lead re-engages
- lead submits again later

## Pipeline rules
- Each lead should have one current status only.
- Each lead should have one primary path only.
- `Qualified` and `Audit Recommended` are mutually exclusive staging statuses.
- `Nurture / Not Fit` is the resting place for low-fit or inactive leads.
