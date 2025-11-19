import type { Race } from "@/types";

/**
 * Generates a pre-race prospect with player names dynamically injected
 * @param match - The race match containing players and prospect template
 * @returns The prospect text with player names injected, or a default message
 */
export function generateProspect(match: Race): string {
  if (!match.prospect) {
    return "The race is about to begin! May the best racer win!";
  }

  let prospect = match.prospect;

  // Replace {p1}, {p2}, {p3}, {p4} with actual player names
  match.players.forEach((player, index) => {
    const placeholder = `{p${player.id.replace("p", "")}}`;
    prospect = prospect.replaceAll(placeholder, player.name);
  });

  return prospect;
}
