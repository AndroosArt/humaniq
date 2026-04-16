# Current Sprint

## Sprint Goal
Operationalize the handoff from Growth & Conversion Review intake to async recommendation, acceptance, onboarding, and ongoing client handling.

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
+Lean sales and proposal operating pack added under `docs/sales/` and `templates/`
+Async proposal flow is now documented as the default conversion path
+Lead routing rules now map every lead to one primary path
+Internal review, proposal, follow-up, onboarding, and pipeline assets now exist in repo-ready form
+Offer ladder now separates the free Growth & Conversion Review from the paid Growth & Conversion Audit
+Post-acceptance path is now documented from acceptance through stabilization and ongoing optimization
+Existing ops docs and review helper are now aligned to the four-path async model
+Old call-first wording has been removed from the core founder handling flow
+`lib/humaniq-review-ops.js` now outputs four-path recommendations, async-first follow-up copy, and updated tracker labels

## In Scope Now
+Run the first real async review-to-proposal cycle end to end
+Keep the live submission path lean, stable, and easy to review manually
+Use the new sales docs and templates in real founder handling
+Tighten proposal, acceptance, and onboarding execution without adding infrastructure
+Use the Practical AI Blueprint as a downstream paid deliverable when appropriate
+Keep the old ops docs and scoring helper consistent with the new four-path system

## Out of Scope Now
+Heavy CI/CD and deployment automation
+Complex frameworks or build tooling
+Long-term architecture decisions
+Non-essential dependencies
+CRM integrations, dashboards, and app code that do not directly support launch execution

## Active Priorities
1. Manually verify Formspree notification delivery (highest remaining risk)
2. Confirm Formspree success behavior, limits, and any provider-side autoresponder settings manually
3. Confirm approved pricing logic and proposal acceptance method for the four engagement paths
4. Decide whether acceptance will happen by reply email, signed proposal, invoice payment, or a mix
5. Test landing page CTA and intake on mobile device
6. Run the first live async review-to-proposal workflow using the new docs and templates
7. Decide whether the intake-facing reference doc should be trimmed further so it does not carry legacy sales-call guidance

## Live Flow
+Landing page CTA sends visitors to `site/humaniq-review.html`
+The custom intake captures answers in-browser as the user progresses
+On submit, the intake posts the review to the external endpoint configured in `site/humaniq-config.js`
+The intake now also evaluates the submission with `lib/humaniq-review-ops.js` and attaches the founder ops summary to the submitted payload when available
+The submission payload now includes `ops_founder_review_snapshot` and `ops_tracker_row_csv` to support inbox-first review and manual tracker updates
+The intake keeps a local copy of the latest submitted payload and latest submit attempt/status as a safety net during testing
+New submissions route into Formspree first for launch-speed reliability, then into founder review, routing, proposal creation, follow-up, acceptance, and onboarding

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
+`docs/sales/proposal-operating-system.md` — Async recommendation and acceptance model
+`docs/sales/lead-routing-rules.md` — Primary path rules and thresholds
+`docs/sales/internal-review-checklist.md` — Under-10-minute QA and approval checklist
+`docs/sales/offer-ladder.md` — Offer structure and naming
+`docs/sales/onboarding-and-maintenance.md` — Post-acceptance model
+`docs/sales/lead-status-pipeline.md` — Status pipeline and criteria
+`templates/proposals/human-iq-proposal-template.md` — Client-facing proposal template
+`templates/proposals/path-specific-outcomes.md` — Path-based response templates
+`templates/emails/proposal-follow-up-sequence.md` — Async email sequence
+`docs/launch/launch-development-plan.md` — Launch execution timeline
+`docs/workflows/chatgpt-codex-software-development.md` — Development process

## What Remains Open
+Approved pricing ranges or quoting logic for each paid path
+Final decision on how acceptance is formally captured
+Whether the landing page or intake UI copy should explicitly mention async approval and deposit-based acceptance
+First live use of the proposal template on a real or realistic lead
+Decision on whether an audit proposal should mention the Practical AI Blueprint explicitly every time or only when justified
+Whether lead-tier language should remain in internal ops docs long-term or be reduced once the path-based process is routine

## Next Decisions Needed From Andrew
1. Confirm whether the paid strategy-first offer should be called `Growth & Conversion Audit` everywhere going forward
2. Confirm the acceptance mechanism: email approval, proposal signature, invoice payment, or a simple combination
3. Confirm whether pricing stays off-repo for now or whether internal price bands should be documented privately
4. Confirm when a call should be required for ongoing partner engagements, if ever

## Definition of Done
+Imported assets are in stable repo-friendly filenames and locations
+Landing page runs locally and links to intake flow
+Full funnel is usable from landing page → intake → submission capture → founder review → routing → proposal → acceptance → onboarding
+Submission destination is easy to replace without changing the intake UI
+Founder post-submit handling is documented and ready for real use
+The first live founder operating cycle can run without new infrastructure
