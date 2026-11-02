import type { RulesInfo, Tournament } from "@/types";
import { round1 } from "@/data/round1";
import { round2 } from "@/data/round2";
import { round3 } from "@/data/round3";
import { round4 } from "@/data/round4";

export const season2025: Tournament = {
  id: "t1",
  rounds: [round1, round2, round3, round4],
};

export const season2025Rules: RulesInfo = {
  dateRange: "December 1st - December 19th",
  time: "11:30 AM",
  location: "Huben",
};
