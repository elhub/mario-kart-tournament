# mario-kart-tournament

<img width="1536" height="1024" alt="emkwt-bg-4" src="https://github.com/user-attachments/assets/09e3c233-39ac-45dd-9700-413953a8b8b7" />

Deployed to https://elhub.github.io/mario-kart-tournament/

Bootstrapped with

- typescript
- react
- vite
- react router
- nuqs
- eslint
- prettier
- knip

## Season 2 (2026) spreadsheet

Season 1 (2025) is static data in `src/data`. Season 2 is read at runtime from a Google Sheet published as CSV (`SHEET_CSV_URL` in `src/seasons.ts`). Add `?debug` to the URL to see any problems found in the sheet.

### Setup

1. Download [`public/season-2026-template.csv`](public/season-2026-template.csv) (also served at `/mario-kart-tournament/season-2026-template.csv`).
2. In the sheet: _File → Import → Upload → Replace current sheet_, separator _Comma_, and **untick** "Convert text to numbers, dates and formulas" so dates stay text.
3. Keep the data on the **first tab**. `pub?output=csv` only serves the first tab; otherwise republish that tab and use the `gid=…&single=true` URL.
4. Optional: add a `yes,no` dropdown to `finished` and a 1-4 number rule to the `position_*` columns.
5. _File → Share → Publish to web_ must stay on. Google caches the published CSV for a few minutes.

### Columns (one row per race, 15 rows)

| Column                      | Notes                                                                                |
| --------------------------- | ------------------------------------------------------------------------------------ |
| `race`                      | 1-15. Decides the bracket position; do not change.                                   |
| `round`                     | Label only, ignored by the app.                                                      |
| `date`                      | `YYYY-MM-DD` (or `D.M.YYYY`). Shown as "Tuesday, December 1st 2026".                 |
| `time`                      | 24h, e.g. `11:30`. Shown as "11:30 AM".                                              |
| `circuit`, `cc`, `location` | Free text.                                                                           |
| `finished`                  | `yes` to show results. Needs 4 names and positions 1-4 used once each, else ignored. |
| `player_1` … `player_4`     | Names for every round, typed by hand. Blank shows "TBD".                             |
| `position_1` … `position_4` | Finishing place of the player in the same slot. 1st and 2nd are highlighted.         |

Do not rename the header cells. If the sheet cannot be read, the site shows an error and a saved copy of the last good data when one exists.
