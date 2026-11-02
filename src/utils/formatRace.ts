const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const ordinal = (day: number) => {
  const lastTwo = day % 100;
  if (lastTwo >= 11 && lastTwo <= 13) return `${day}th`;
  return `${day}${["th", "st", "nd", "rd"][day % 10] ?? "th"}`;
};

// Accepts YYYY-MM-DD and D.M.YYYY; anything else is left for the caller to show as typed.
const parseDate = (raw: string): Date | null => {
  const text = raw.trim();
  const iso = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(text);
  const dmy = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/.exec(text);
  const parts = iso ? [iso[1], iso[2], iso[3]] : dmy ? [dmy[3], dmy[2], dmy[1]] : null;
  if (!parts) return null;

  const [year, month, day] = parts.map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  const isRealDate = date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
  return isRealDate ? date : null;
};

export const formatRaceDate = (raw: string): string => {
  if (!raw.trim()) return "Date TBD";
  const date = parseDate(raw);
  if (!date) return raw.trim();
  return `${WEEKDAYS[date.getUTCDay()]}, ${MONTHS[date.getUTCMonth()]} ${ordinal(date.getUTCDate())} ${date.getUTCFullYear()}`;
};

export const formatRaceTime = (raw: string): string => {
  const text = raw.trim();
  if (!text) return "Time TBD";

  const match = /^(\d{1,2})[:.](\d{2})(?::\d{2})?\s*(am|pm)?$/i.exec(text);
  if (!match) return text;

  const hours = Number(match[1]);
  const minutes = match[2];
  const meridiem = match[3]?.toUpperCase();
  if (Number(minutes) > 59) return text;

  if (meridiem) {
    return hours >= 1 && hours <= 12 ? `${hours}:${minutes} ${meridiem}` : text;
  }
  if (hours > 23) return text;
  return `${hours % 12 || 12}:${minutes} ${hours < 12 ? "AM" : "PM"}`;
};

export const formatDateRange = (firstRaw: string, lastRaw: string): string => {
  const first = parseDate(firstRaw);
  const last = parseDate(lastRaw);
  if (!first || !last) return "Dates to be announced";
  const label = (d: Date) => `${MONTHS[d.getUTCMonth()]} ${ordinal(d.getUTCDate())}`;
  return `${label(first)} - ${label(last)}`;
};
