# Minimal landing-page wiring for `site/index.html`

Use these edits after you add `site/review.html`.

## 1. Replace CTA href targets

Replace every review-first CTA that currently points to a placeholder or section anchor with:

```html
href="./review.html"
```

That should include the nav CTA, hero CTA, and final CTA.

## 2. Keep the “How It Works” button unchanged

If one secondary button scrolls to the process section, leave that alone.

## 3. Keep Practical AI Blueprint downstream

Do not make `review.html` or the hero CTA say “Start Your AI Blueprint.” Keep “Growth & Conversion Review” as the first step and refer to the Practical AI Blueprint as the tailored outcome after review.

## 4. Optional tiny confirmation note

In the final CTA area, a supporting line like this works:

```html
<p class="mt-6 text-sm text-zinc-500 dark:text-zinc-400 flex items-center justify-center gap-2 font-medium">
  <span class="text-emerald-500">&#10003;</span>
  Human-reviewed. No generic report. Clear next steps after submission.
</p>
```

## 5. Submission handling note

The intake page currently uses a placeholder `FORM_ENDPOINT` in `review.html`.

- If blank: it stores the latest submission locally and shows the thank-you screen.
- If set: it will POST JSON to your endpoint.

Payload shape:

```json
{
  "submittedAt": "2026-04-15T12:00:00.000Z",
  "source": "human-iq-custom-review",
  "values": {
    "business_name": "...",
    "email": "..."
  }
}
```
