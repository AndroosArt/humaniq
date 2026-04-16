# Current Sprint

## Sprint Goal
Bring real launch assets into the repo and align the funnel (landing page → intake → post-submit founder handling).

## Status
+GitHub is connected; main has been pushed
+Core folder structure is in place
+Launch assets have been imported and normalized into the repo
+Landing page approach is code-first (HTML/JS)
+Landing page and custom intake flow exist in the repo
+Growth & Conversion Review is the front-door offer across the funnel
+Landing page CTA now points to the custom intake at `site/humaniq-review.html`
+Custom intake now supports a real external submission handoff via `site/humaniq-config.js`
+Submission endpoint value has been added in `site/humaniq-config.js`
+Practical AI Blueprint remains the downstream deliverable
+Post-submit ops pack has been integrated into the repo
+Founder handling flow is now documented in `docs/ops/`
+Next focus: test the full intake-to-follow-up handoff and confirm the first live founder workflow

## In Scope Now
+Keep the landing page and intake flow aligned to the Growth & Conversion Review
+Keep the live submission path lean and stable
+Integrate the post-submit founder ops layer
+Document the founder-ready handoff after intake submission
+Use the Practical AI Blueprint as the downstream conversion path

## Out of Scope Now
+Heavy CI/CD and deployment automation
+Complex frameworks or build tooling
+Long-term architecture decisions
+Non-essential dependencies

## Active Priorities
1. Run a live end-to-end test from intake submission through founder follow-up handling
2. Confirm the post-submit scoring, tracker, and follow-up outputs are usable in real founder ops
3. Start the first live review-to-Practical AI Blueprint conversion workflow
4. Tighten any small gaps in the submission-to-tracker handoff without adding complexity

## Live Flow
+Landing page CTA sends visitors to `site/humaniq-review.html`
+The custom intake captures answers in-browser as the user progresses
+On submit, the intake posts the review to the external endpoint configured in `site/humaniq-config.js`
+The intake now also evaluates the submission with `lib/humaniq-review-ops.js` and attaches the founder ops summary to the submitted payload when available
+The intake keeps a local copy of the latest submitted payload as a safety net during testing
+New submissions route into Formspree first for launch-speed reliability, then into founder review, tracker updates, and follow-up

## Expected Asset Targets
+`site/index.html` — Landing page source
+`site/humaniq-review.html` — Custom intake flow
+`lib/humaniq-review-ops.js` — Post-submit scoring and follow-up helper
+`docs/intake/growth-conversion-review.md` — Intake qualification and flow
+`docs/ops/post-submit-operating-flow.md` — Founder handling flow
+`docs/ops/follow-up-templates.md` — First response templates
+`docs/ops/lead-tracker-columns.md` — Lean lead tracker structure
+`docs/launch/launch-development-plan.md` — Launch execution timeline
+`docs/workflows/chatgpt-codex-software-development.md` — Development process

## Definition of Done
+Imported assets are in stable repo-friendly filenames and locations
+Landing page runs locally and links to intake flow
+Full funnel is testable from landing page → intake → submission capture
+Submission destination is easy to replace without changing the intake UI
+Founder post-submit handling is documented and ready for real use
+Next sprint can focus on the first live operating cycle
