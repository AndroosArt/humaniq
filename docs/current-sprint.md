# Current Sprint

## Sprint Goal
Move from integration into live founder operating mode for the Growth & Conversion Review funnel.

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
+Lean tracker asset now exists in `docs/ops/lead-tracker.csv`
+Founder review checklist now exists in `docs/ops/founder-review-checklist.md`
+Submission payload now includes a founder review snapshot plus tracker-ready CSV fields for easier manual handling
+Current focus: run and operate the first real founder review cycle with the existing flow
+First real founder ops cycle run: 2026-04-15 — test submission validated end to end
+Two small friction fixes applied to `lib/humaniq-review-ops.js`: greeting now uses first name only; medium follow-up prose cleaned up
+Formspree inbox delivery is still unverified in automated testing — manual check required
+Repo-side submit handling is now clearer for launch: success state explains expected manual follow-up, failure state no longer drops to a generic alert, and latest submit attempt/status is preserved in local storage for safer testing
+Site deployed to Vercel: https://humaniq.vercel.app — serving from repo root via vercel.json so /lib/ assets resolve correctly
+GoDaddy DNS updated: A record (@) → 216.198.79.1, CNAME (www) → e798c5c9d7601522.vercel-dns-017.com
+Both humaniqconsulting.com and www.humaniqconsulting.com are connected and verified as Valid Configuration in Vercel
+Formspree endpoint configured as https://formspree.io/f/xaqaqawe — live submission test on deployed domain still needed

## In Scope Now
+Run the first real founder ops cycle end to end
+Keep the live submission path lean, stable, and easy to review manually
+Use the tracker and follow-up process in real founder handling
+Tighten small practical gaps in submission review without adding infrastructure
+Use the Practical AI Blueprint as the downstream conversion path when qualified

## Out of Scope Now
+Heavy CI/CD and deployment automation
+Complex frameworks or build tooling
+Long-term architecture decisions
+Non-essential dependencies

## Active Priorities
1. Manually verify Formspree notification delivery (highest remaining risk)
2. Confirm Formspree success behavior, limits, and any provider-side autoresponder settings manually
3. Confirm pricing / scope language is set on the landing page
4. Test landing page CTA and intake on mobile device
5. Start the first live review-to-Practical AI Blueprint conversion workflow

## Live Flow
+Landing page CTA sends visitors to `site/humaniq-review.html`
+The custom intake captures answers in-browser as the user progresses
+On submit, the intake posts the review to the external endpoint configured in `site/humaniq-config.js`
+The intake now also evaluates the submission with `lib/humaniq-review-ops.js` and attaches the founder ops summary to the submitted payload when available
+The submission payload now includes `ops_founder_review_snapshot` and `ops_tracker_row_csv` to support inbox-first review and manual tracker updates
+The intake keeps a local copy of the latest submitted payload and latest submit attempt/status as a safety net during testing
+New submissions route into Formspree first for launch-speed reliability, then into founder review, tracker updates, and follow-up

## Expected Asset Targets
+`site/index.html` — Landing page source
+`site/humaniq-review.html` — Custom intake flow
+`lib/humaniq-review-ops.js` — Post-submit scoring and follow-up helper
+`docs/intake/growth-conversion-review.md` — Intake qualification and flow
+`docs/ops/post-submit-operating-flow.md` — Founder handling flow
+`docs/ops/follow-up-templates.md` — First response templates
+`docs/ops/lead-tracker-columns.md` — Lean lead tracker structure
+`docs/ops/lead-tracker.csv` — Ready-to-use founder tracker
+`docs/ops/founder-review-checklist.md` — New submission review checklist
+`docs/launch/launch-development-plan.md` — Launch execution timeline
+`docs/workflows/chatgpt-codex-software-development.md` — Development process

## Definition of Done
+Imported assets are in stable repo-friendly filenames and locations
+Landing page runs locally and links to intake flow
+Full funnel is usable from landing page → intake → submission capture → founder review → tracker update → first follow-up
+Submission destination is easy to replace without changing the intake UI
+Founder post-submit handling is documented and ready for real use
+The first live founder operating cycle can run without new infrastructure
