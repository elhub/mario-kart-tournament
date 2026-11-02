import Papa from "papaparse";
import type { Player, Race, Round, RulesInfo, Tournament } from "@/types";
import { formatDateRange, formatRaceDate, formatRaceTime } from "@/utils/formatRace";

export type ParsedSeason = {
  tournament: Tournament;
  rules: RulesInfo;
  warnings: string[];
};

export class SheetError extends Error {}

// Same bracket shape as the hard-coded Season 1 data.
const ROUND_LAYOUT = [
  { id: "r1", name: "Round of Sixteen", firstRace: 1, races: 8 },
  { id: "r2", name: "Quarterfinals", firstRace: 9, races: 4 },
  { id: "r3", name: "Semifinals", firstRace: 13, races: 2 },
  { id: "r4", name: "Finals", firstRace: 15, races: 1 },
];
const FIRST_RACE = 1;
const LAST_RACE = 15;
const SLOTS = [1, 2, 3, 4];

const REQUIRED_COLUMNS = [
  "race",
  "date",
  "time",
  "circuit",
  "cc",
  "location",
  "finished",
  ...SLOTS.map((i) => `player_${i}`),
  ...SLOTS.map((i) => `position_${i}`),
];
const TRUE_VALUES = new Set(["yes", "true", "y", "1", "x", "ja"]);

type SheetRow = Record<string, string>;

const normalizeHeader = (cell: string) => cell.trim().toLowerCase().replace(/\s+/g, "_");

const mostCommon = (values: string[]): string => {
  const counts = new Map<string, number>();
  values.filter(Boolean).forEach((v) => counts.set(v, (counts.get(v) ?? 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "";
};

const readRows = (text: string, warnings: string[]): Map<number, SheetRow> => {
  if (/^\s*<(!doctype|html)/i.test(text)) {
    throw new SheetError("The spreadsheet is not published as CSV (Google returned a web page instead).");
  }

  // Greedy skipping drops rows of only commas, which a freshly created sheet is full of.
  const rows = Papa.parse<string[]>(text, { skipEmptyLines: "greedy" }).data;
  const headerIndex = rows.findIndex((r) => r.some((cell) => normalizeHeader(cell) === "race"));
  if (headerIndex === -1) {
    throw new SheetError(`Could not find the header row. Expected columns: ${REQUIRED_COLUMNS.join(", ")}.`);
  }

  const header = rows[headerIndex].map(normalizeHeader);
  const missing = REQUIRED_COLUMNS.filter((c) => !header.includes(c));
  if (missing.length > 0) {
    throw new SheetError(`The spreadsheet is missing these columns: ${missing.join(", ")}.`);
  }

  const byRace = new Map<number, SheetRow>();
  rows.slice(headerIndex + 1).forEach((cells) => {
    const row: SheetRow = {};
    header.forEach((name, i) => {
      if (name) row[name] = (cells[i] ?? "").trim();
    });

    const raceNumber = Number(row.race.replace(/\D/g, ""));
    if (!Number.isInteger(raceNumber) || raceNumber < FIRST_RACE || raceNumber > LAST_RACE) {
      warnings.push(`Ignored a row with invalid race number "${row.race}".`);
      return;
    }
    if (byRace.has(raceNumber)) {
      warnings.push(`Race ${raceNumber} appears more than once; only the first row is used.`);
      return;
    }
    byRace.set(raceNumber, row);
  });
  return byRace;
};

const buildRace = (raceNumber: number, row: SheetRow | undefined, warnings: string[]): Race => {
  const cell = (name: string) => row?.[name] ?? "";
  const names = SLOTS.map((i) => cell(`player_${i}`));

  let positions: (number | undefined)[] = SLOTS.map(() => undefined);
  let isFinished = false;

  if (TRUE_VALUES.has(cell("finished").toLowerCase())) {
    const parsed = SLOTS.map((i) => (/^[1-4]$/.test(cell(`position_${i}`)) ? Number(cell(`position_${i}`)) : undefined));
    const isComplete = names.every(Boolean) && parsed.every((p) => p !== undefined) && new Set(parsed).size === 4;
    if (isComplete) {
      positions = parsed;
      isFinished = true;
    } else {
      warnings.push(
        `Race ${raceNumber} is marked finished, but needs 4 names and positions 1-4 used once each. Shown as not finished.`
      );
    }
  }

  const players: Player[] = SLOTS.map((slot, i) => {
    const id = `m${raceNumber}-p${slot}`;
    return names[i]
      ? { id, name: names[i], position: positions[i] }
      : { id, name: "TBD", isPlaceholder: true, position: positions[i] };
  });

  return {
    id: `m${raceNumber}`,
    date: formatRaceDate(cell("date")),
    time: formatRaceTime(cell("time")),
    circuit: cell("circuit") || "TBD",
    cc: cell("cc") || "TBD",
    location: cell("location") || "TBD",
    isFinished,
    players,
  };
};

const buildSeason = (rows: Map<number, SheetRow>, warnings: string[]): ParsedSeason => {
  const rounds: Round[] = ROUND_LAYOUT.map(({ id, name, firstRace, races }) => ({
    id,
    name,
    matches: Array.from({ length: races }, (_, i) => buildRace(firstRace + i, rows.get(firstRace + i), warnings)),
  }));

  const rawOf = (column: string) => [...rows.values()].map((r) => r[column] ?? "");
  const rules: RulesInfo = {
    dateRange: formatDateRange(rows.get(FIRST_RACE)?.date ?? "", rows.get(LAST_RACE)?.date ?? ""),
    time: mostCommon(rawOf("time")) ? formatRaceTime(mostCommon(rawOf("time"))) : "TBA",
    location: mostCommon(rawOf("location")) || "TBA",
  };

  return { tournament: { id: "season-sheet", rounds }, rules, warnings };
};

export const parseSeasonCsv = (text: string): ParsedSeason => {
  const warnings: string[] = [];
  return buildSeason(readRows(text, warnings), warnings);
};

export const createEmptySeason = (): ParsedSeason => buildSeason(new Map(), []);
