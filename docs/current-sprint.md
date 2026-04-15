# Current Sprint

## Sprint Goal
Bring real launch assets into the repo and align the funnel (landing page → intake → delivery).

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
+Next focus: run the live submission test and tighten founder handling workflow

## In Scope Now
+Keep the landing page and intake flow aligned to the Growth & Conversion Review
+Add a lean real submission path for the custom intake
+Define the founder-ready handoff after intake submission
+Use the Practical AI Blueprint as the downstream conversion path
+Test the full funnel end-to-end

## Out of Scope Now
+Heavy CI/CD and deployment automation
+Complex frameworks or build tooling
+Long-term architecture decisions
+Non-essential dependencies

## Active Priorities
1. Test the full funnel from landing page to intake completion with the configured endpoint
2. Confirm the founder handling path for new review submissions
3. Prepare founder operating notes for delivery and follow-up
4. Move the best qualified leads into the Practical AI Blueprint follow-up flow

## Live Flow
+Landing page CTA sends visitors to `site/humaniq-review.html`
+The custom intake captures answers in-browser as the user progresses
+On submit, the intake posts the review to the external endpoint configured in `site/humaniq-config.js`
+The intake still keeps the current localStorage fallback in place as a safety net during testing
+New submissions are intended to route into Formspree first for launch-speed reliability, then into founder review and follow-up

## Expected Asset Targets
+`site/index.html` — Landing page source
+`site/humaniq-review.html` — Custom intake flow
+`docs/intake/growth-conversion-review.md` — Intake qualification and flow
+`docs/launch/launch-development-plan.md` — Launch execution timeline
+`docs/workflows/chatgpt-codex-software-development.md` — Development process

## Definition of Done
+Imported assets are in stable repo-friendly filenames and locations
+Landing page runs locally and links to intake flow
+Full funnel is testable from landing page → intake → submission capture
+Submission destination is easy to replace without changing the intake UI
+Next sprint can begin implementation immediately
