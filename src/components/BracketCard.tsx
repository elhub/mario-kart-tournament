import { useState } from "react";
import type { Race, Player } from "@/types";
import { RaceModal } from "./RaceModal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export const BracketCard = ({ match, roundName, rowIndex }: { match: Race; roundName: string; rowIndex: number }) => {
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);
  const [isRaceModalOpen, setIsRaceModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  // Extract match number from id (e.g., "m1" -> "1")
  const matchNumber = match.id.replace(/\D/g, "");

  const handlePlayerClick = (player: Player, e: React.MouseEvent) => {
    e.stopPropagation();
    // Don't open modal for placeholder players (Player X format) or players without description
    if (!player.description || player.name.match(/^Player \d+$/)) {
      return;
    }
    setSelectedPlayer(player);
    setIsPlayerModalOpen(true);
  };

  // Handle player click from race modal
  const handleRaceModalPlayerClick = (player: Player) => {
    // Just open the player modal with the selected player
    setSelectedPlayer(player);
    setIsPlayerModalOpen(true);
  };

  // Check if all players have real names (not placeholder "Player X")
  const allPlayersAssigned = match.players.every((p) => !p.name.match(/^Player \d+$/));

  // Check if race has prospect/summary content to show
  const hasRaceContent = !!match.prospect || !!match.summary;

  // Handle card click for race modal
  const handleCardClick = (e: React.MouseEvent) => {
    // Only show race modal if all players are assigned and click is on the card itself
    if (allPlayersAssigned && hasRaceContent && !(e.target as HTMLElement).closest("[data-player-id]")) {
      setIsRaceModalOpen(true);
    }
  };

  // Helper function to get position emoji
  const getPositionEmoji = (position?: number) => {
    switch (position) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return null;
    }
  };

  // Helper function to get background color for qualified players
  const getPlayerBgClass = (player: Player) => {
    if (!match.isFinished || !player.position) {
      return "hover:bg-muted/50";
    }

    // 1st and 2nd place get highlighted backgrounds
    if (player.position === 1 || player.position === 2) {
      return "bg-yellow-200 dark:bg-yellow-800 hover:bg-yellow-300 dark:hover:bg-yellow-700";
    }

    // 3rd and 4th place remain normal
    return "hover:bg-muted/50";
  };

  return (
    <div className="relative my-auto">
      {rowIndex === 0 && (
        <h2 className="absolute -top-9 w-[210px] text-center text-xl font-semibold text-gray-700 dark:text-gray-300">
          {roundName}
        </h2>
      )}
      <Card
        id={match.id}
        className={cn(
          "relative w-[210px] overflow-hidden shadow-2xl transition-all duration-200",
          allPlayersAssigned && hasRaceContent && "cursor-pointer hover:scale-105 hover:border-blue-400 dark:hover:border-blue-500"
        )}
        onClick={handleCardClick}
      >
        {/* Finished Race Flag */}
        {match.isFinished && (
          <div className="absolute top-0 right-1 text-xl z-10">
            🏁
          </div>
        )}

        {/* Header Section - Race Info */}
        <div className="bg-blue-50 dark:bg-blue-900 px-3 py-2.5 border-b">
          <div className="flex flex-col space-y-0.5">
            <span className="text-xs font-bold text-muted-foreground leading-tight">
              Race {matchNumber}
            </span>
            <span className="text-xs font-medium leading-tight">
              {match.date}
            </span>
            <span className="text-xs text-muted-foreground leading-tight">
              {match.time}
            </span>
            <span className="text-xs font-medium leading-tight">
              @{match.location}
            </span>
          </div>
        </div>

        {/* Players Section */}
        <div className="flex flex-col border-y">
          <TooltipProvider delayDuration={300}>
            {match.players.map((p, index) => {
              const isPlaceholder = Boolean(p.name.match(/^Player \d+$/));
              const isClickable = p.description && !isPlaceholder;

              return (
                <Tooltip key={p.id}>
                  <TooltipTrigger asChild>
                    <div
                      className={cn(
                        "w-full px-3 transition-colors flex items-center h-[32px]",
                        index < match.players.length - 1 && "border-b",
                        getPlayerBgClass(p),
                        isClickable && "cursor-pointer"
                      )}
                      onClick={(e) => handlePlayerClick(p, e)}
                      data-player-id={p.id}
                      data-position={p.position}
                    >
                      <div className="flex justify-between items-center w-full gap-2">
                        <span className="font-semibold text-sm leading-tight truncate">
                          {p.name}
                        </span>
                        {match.isFinished && p.position && (
                          <span className="text-base flex-shrink-0">{getPositionEmoji(p.position)}</span>
                        )}
                      </div>
                    </div>
                  </TooltipTrigger>
                  {p.description && !isPlaceholder && (
                    <TooltipContent side="right" className="max-w-xs" sideOffset={8}>
                      <div className="space-y-2">
                        <p className="font-bold text-white">{p.name}</p>
                        <p className="text-sm text-white leading-relaxed">
                          {p.description.replace("{name}", p.name)}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {p.attributes?.map((attr, idx) => (
                            <Badge key={idx} variant="blue" className="text-xs">
                              {attr.emoji} {attr.label}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </TooltipContent>
                  )}
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </div>

        {/* Footer Section - Circuit & CC */}
        <div className="bg-muted px-3 py-2.5 border-t">
          <div className="flex justify-between gap-3">
            <div className="flex flex-col gap-1 flex-1">
              <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wide">Circuit</span>
              <Badge variant="purple" className="text-[10px] w-fit whitespace-nowrap font-medium">
                {match.circuit}
              </Badge>
            </div>
            <div className="flex flex-col gap-1 items-end flex-1">
              <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wide">CC</span>
              <Badge variant="green" className="text-[10px] w-fit font-medium">
                {match.cc}
              </Badge>
            </div>
          </div>
        </div>

        {/* Player Info Modal */}
        <Dialog open={isPlayerModalOpen} onOpenChange={setIsPlayerModalOpen}>
          <DialogContent className="max-w-lg mx-4 p-0 gap-0">
            <DialogHeader className="bg-blue-500 dark:bg-blue-600 text-white p-6 rounded-t-2xl">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">🏎️</span>
                  <DialogTitle className="text-2xl text-white">{selectedPlayer?.name}</DialogTitle>
                </div>
                <Badge variant="yellow" className="w-fit px-3 py-1">
                  Mario Kart Champion
                </Badge>
              </div>
            </DialogHeader>
            <div className="py-6 px-6 space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⚡</span>
                  <h3 className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                    Unique Abilities
                  </h3>
                </div>
                <p className="text-md leading-relaxed">
                  {selectedPlayer?.description?.replace(/\{name\}/g, selectedPlayer.name)}
                </p>
              </div>

              {selectedPlayer?.attributes && selectedPlayer.attributes.length > 0 && (
                <div className="flex justify-center gap-4 pt-2 flex-wrap">
                  {selectedPlayer.attributes.map((attr, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <span className="text-3xl">{attr.emoji}</span>
                      <span className="text-xs text-muted-foreground text-center">
                        {attr.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Race Modal (Pre-Race Prospects & Results) */}
        <RaceModal
          isOpen={isRaceModalOpen}
          onClose={() => setIsRaceModalOpen(false)}
          match={match}
          onPlayerClick={handleRaceModalPlayerClick}
        />
      </Card>
    </div>
  );
};
