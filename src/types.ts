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

export type Match = {
  id: string;
  date: string;
  time: string;
  circuit: string;
  cc: string;
  location: string;
  players: Player[];
  winnerId?: string;
  isFinished?: boolean; // Whether the race is finished
};

export type Round = {
  id: string;
  name: string; // "Quarterfinals", "Semifinals", etc.
  matches: Match[];
};

export type Tournament = {
  id: string;
  rounds: Round[];
};
