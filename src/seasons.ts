export const SEASON_IDS = ["2025", "2026"] as const;
export type SeasonId = (typeof SEASON_IDS)[number];

export const DEFAULT_SEASON: SeasonId = "2026";

export const SEASON_LABELS: Record<SeasonId, string> = {
  "2025": "Season 1",
  "2026": "Season 2",
};

// Google Sheet published to the web (File > Share > Publish to web > CSV), first tab only.
export const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTkm_92KUU2RdrSc0lP-fRZeubSmhQSEiVBs6ab-ywrwtKKudnpjCaF-hPwWBiETH-AH1S4gYv4ph0B/pub?output=csv";
