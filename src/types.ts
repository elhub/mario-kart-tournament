export type RacingAttribute = {
  emoji: string;
  label: string;
};

export type Player = {
  id: string;
  name: string;
  description?: string;
  attributes?: RacingAttribute[];
  position?: number; // 1st, 2nd, 3rd, 4th place
};

export type Race = {
  id: string;
  date: string;
  time: string;
  circuit: string;
  cc: string;
  location: string;
  players: Player[];
  winnerId?: string;
  isFinished?: boolean; // Whether the race is finished
  prospect?: string; // Pre-race prospect template with {p1}, {p2}, {p3}, {p4} placeholders for player names
  summary?: string; // Post-race summary template with {p1}, {p2}, {p3}, {p4} placeholders for player names
};

export type Round = {
  id: string;
  name: string; // "Quarterfinals", "Semifinals", etc.
  matches: Race[];
};

export type Tournament = {
  id: string;
  rounds: Round[];
};
