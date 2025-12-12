import type { Race, Player } from "@/types";
import { playerProfiles } from "@/data/players";

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

  // Create a map that includes both race players AND all player profiles
  const playerMap = new Map(match.players.map((p) => [p.id, p]));

  // Add all player profiles to the map (converting to Player type with position undefined)
  Object.entries(playerProfiles).forEach(([id, profile]) => {
    if (!playerMap.has(id)) {
      playerMap.set(id, { ...profile, position: undefined });
    }
  });

  // Find all player placeholders and their positions (matches {slug} pattern)
  const placeholderRegex = /\{([a-z0-9-]+)\}/g;
  const matches = Array.from(prospect.matchAll(placeholderRegex));

  matches.forEach((match, index) => {
    const placeholder = match[0];
    const matchIndex = match.index!;
    const playerId = match[1]; // The captured slug (e.g., "johanna", "per-kristian")
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
