# Human IQ Lead Routing Rules

## Purpose
Turn the intake, scoring rubric, and existing engagement recommendations into one clear routing method so every lead gets exactly one primary path.

## Inputs used
- Fit score out of 25
- Revenue opportunity level: Low / Medium / High
- Primary problem class:
  - Lead generation
  - Qualification
  - Follow-up
  - Sales process
  - Systems
- Urgency
- Investment range
- Operator judgment after review

## Primary path options
Choose one and only one:

1. Not a Fit Yet
2. Growth & Conversion Audit
3. Strategy + Implementation Sprint
4. Ongoing Optimization Partner

## Naming note
The repo already uses `Growth & Conversion Review` as the front-door offer and `Strategy / audit only` as a downstream recommendation. For v1, use:

- `Growth & Conversion Review` = free front-door intake and diagnosis
- `Growth & Conversion Audit` = first paid strategy-first engagement

This keeps the front door clear while making the paid strategy path easier to sell and operate.

## Routing logic
### 1. Not a Fit Yet
Route here when any of these are true:

- Fit score is `8 or below`
- urgency is `Exploring options` and support intent is `Just exploring`
- investment range is `Under $2,500` and the business clearly needs more than light advice
- there is not enough business maturity or demand to justify a meaningful paid engagement yet
- the operator cannot see a realistic near-term win that Human IQ should sell

Use this path for:
- low-readiness leads
- low-urgency leads
- poor commercial fit
- leads that need to mature before paid work makes sense

### 2. Growth & Conversion Audit
Route here when most of these are true:

- Fit score is `9-17`
- opportunity level is `Medium`, or `High` with unclear scope
- the business needs diagnosis and prioritization before implementation
- urgency is real, but immediate execution scope is not yet clean
- investment readiness is possible but not fully proven

Use this path for:
- mixed-signal but real businesses
- businesses with several problems that need prioritization
- prospects who need a paid strategic recommendation before build work

### 3. Strategy + Implementation Sprint
Route here when most of these are true:

- Fit score is `18-21`
- opportunity level is `High`
- urgency is `Immediate priority` or `Important this quarter`
- support intent is `Yes, immediately` or `Yes, soon`
- budget is not `Under $2,500`
- scope can be bounded into a defined sprint

Use this path for:
- clear revenue leakage with a clear first implementation phase
- businesses ready to act quickly
- prospects who do not need a long advisory engagement first

### 4. Ongoing Optimization Partner
Route here when most of these are true:

- Fit score is `22+`
- opportunity level is `High`
- business maturity is strong
- lead volume or revenue leverage is meaningful
- the need is not one fix but ongoing refinement across lead flow, qualification, follow-up, conversion, and systems
- the operator believes Human IQ can create ongoing measurable value

Use this path for:
- established operators with demand already present
- clients likely to benefit from continuous optimization, not just a sprint

## Tie-break rules
Use these rules if a lead could fit more than one path:

1. If implementation scope is not yet clear, choose `Growth & Conversion Audit`.
2. If scope is clear and the buyer is ready, choose `Strategy + Implementation Sprint`.
3. If the buyer clearly needs recurring support beyond an initial sprint, choose `Ongoing Optimization Partner`.
4. If commercial readiness is too weak to justify paid work, choose `Not a Fit Yet`.

## Simple decision tree
1. Is this commercially viable now?
If no, route to `Not a Fit Yet`.

2. Is there enough clarity to sell implementation responsibly right now?
If no, route to `Growth & Conversion Audit`.

3. Is the immediate best next step a bounded execution phase?
If yes, route to `Strategy + Implementation Sprint`.

4. Does the business need ongoing refinement beyond a first sprint?
If yes, route to `Ongoing Optimization Partner`.

## Example logic
### Example A
- Fit score: 7
- Opportunity: Low
- Urgency: Exploring options
- Budget: Under $2,500
Route: `Not a Fit Yet`

### Example B
- Fit score: 14
- Opportunity: Medium
- Urgency: Important this quarter
- Several friction points but unclear priority order
Route: `Growth & Conversion Audit`

### Example C
- Fit score: 19
- Opportunity: High
- Clear follow-up and qualification leakage
- Buyer wants help soon
Route: `Strategy + Implementation Sprint`

### Example D
- Fit score: 23
- Opportunity: High
- Established business, strong demand, several optimization layers
Route: `Ongoing Optimization Partner`

## Operator override
The rubric supports the decision, but the operator makes the final call. If the operator overrides the default score-based route, add one sentence to the notes explaining why.
