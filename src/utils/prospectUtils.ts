import type { Race, Player } from "@/types";

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

export type ProspectElement =
  | string
  | {
      type: "player";
      player: Player;
      key: string;
      onClick: () => void;
    };

/**
 * Generates a pre-race prospect with clickable player names as React elements
 * @param match - The race match containing players and prospect template
 * @param onPlayerClick - Callback function when a player name is clicked
 * @returns Array of elements with clickable player names
 */
export function generateProspectElements(match: Race, onPlayerClick: (player: Player) => void): ProspectElement[] {
  if (!match.prospect) {
    return ["The race is about to begin! May the best racer win!"];
  }

  let prospect = match.prospect;
  const elements: ProspectElement[] = [];
  let lastIndex = 0;

  // Create a map of player IDs to player objects for quick lookup
  const playerMap = new Map(match.players.map((p) => [p.id, p]));

  // Find all player placeholders and their positions
  const placeholderRegex = /\{p\d+\}/g;
  const matches = Array.from(prospect.matchAll(placeholderRegex));

  matches.forEach((match, index) => {
    const placeholder = match[0];
    const matchIndex = match.index!;
    const playerId = `p${placeholder.match(/\d+/)![0]}`;
    const player = playerMap.get(playerId);

    // Add text before the placeholder
    if (matchIndex > lastIndex) {
      elements.push(prospect.substring(lastIndex, matchIndex));
    }

    // Add clickable player name
    if (player) {
      elements.push({
        type: "player",
        player,
        key: `player-${index}`,
        onClick: () => onPlayerClick(player),
      });
    }

    lastIndex = matchIndex + placeholder.length;
  });

  // Add remaining text after the last placeholder
  if (lastIndex < prospect.length) {
    elements.push(prospect.substring(lastIndex));
  }

  return elements;
}
