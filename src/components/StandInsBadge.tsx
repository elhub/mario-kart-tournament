import { useState } from "react";
import { playerProfiles, standInPlayerIds } from "@/data/players";
import type { Player } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function StandInsBadge() {
  const [selectedPlayer, setSelectedPlayer] = useState<Omit<Player, "position"> | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const standIns = standInPlayerIds.map((id) => playerProfiles[id]);

  const handlePlayerClick = (player: Omit<Player, "position">) => {
    setSelectedPlayer(player);
    setIsOpen(true);
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border-3 border-teal-500 dark:border-teal-400 overflow-hidden w-full">
        <div className="flex flex-col">
          {/* Header */}
          <div className="bg-teal-600 dark:bg-teal-500 w-full px-6 py-3 text-center">
            <span className="text-white font-bold text-base tracking-wide">
              🏃 AVAILABLE STAND-INS 🏃
            </span>
          </div>

          {/* Main Content */}
          <div className="px-6 py-5 w-full space-y-4">
            <p className="text-sm text-center font-medium text-muted-foreground">
              Need a substitute? These racers are ready to jump in!
            </p>

            <TooltipProvider>
              <div className="flex gap-3 justify-center">
                {standIns.map((standIn) => (
                  <Tooltip key={standIn.id} delayDuration={300}>
                    <TooltipTrigger asChild>
                      <div
                        className="bg-teal-50 dark:bg-teal-900 px-4 py-2.5 rounded-lg border-2 border-teal-200 dark:border-teal-700 cursor-pointer transition-all hover:scale-105 hover:border-teal-600 dark:hover:border-teal-400 hover:shadow-lg"
                        onClick={() => handlePlayerClick(standIn)}
                      >
                        <span className="font-semibold text-sm text-teal-800 dark:text-teal-200">
                          {standIn.name}
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs" sideOffset={8}>
                      <div className="space-y-2">
                        <p className="font-bold text-white">{standIn.name}</p>
                        <p className="text-sm text-white leading-relaxed">
                          {standIn.description?.replace("{name}", standIn.name)}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {standIn.attributes?.map((attr, idx) => (
                            <Badge key={idx} variant="purple" className="text-xs">
                              {attr.emoji} {attr.label}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>

      {/* Player Details Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md mx-4 p-0 gap-0">
          <DialogHeader className="bg-teal-600 dark:bg-teal-700 text-white p-6 rounded-t-2xl">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-3xl">🏎️</span>
                <DialogTitle className="text-2xl text-white">{selectedPlayer?.name}</DialogTitle>
              </div>
              <Badge variant="yellow" className="w-fit px-3 py-1">
                Stand-In Racer
              </Badge>
            </div>
          </DialogHeader>
          <div className="py-6 px-6 space-y-6">
            <div className="bg-teal-50 dark:bg-teal-900 p-6 rounded-xl border-l-4 border-teal-600">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">⚡</span>
                <h3 className="text-sm font-semibold text-teal-700 dark:text-teal-300">
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
    </>
  );
}
