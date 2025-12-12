import type { Race, Player } from "@/types";
import { generateProspectElements } from "@/utils/prospectUtils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface RaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  match: Race;
  onPlayerClick: (player: Player) => void;
}

export const RaceModal = ({ isOpen, onClose, match, onPlayerClick }: RaceModalProps) => {
  const matchNumber = match.id.replace(/\D/g, "");

  // Helper function to get position emoji
  const getPositionEmoji = (position?: number) => {
    switch (position) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      case 4:
        return "4️⃣";
      default:
        return null;
    }
  };

  // Determine default tab based on race status
  const defaultTab = match.isFinished && match.summary ? "results" : "prospects";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl mx-4 p-0 gap-0 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="bg-purple-500 dark:bg-purple-600 text-white p-6 rounded-t-2xl">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-3xl">{match.isFinished ? "🏁" : "🔮"}</span>
              <DialogTitle className="text-2xl text-white">
                {match.isFinished ? "Race Complete" : "Pre-Race Prospects"}
              </DialogTitle>
            </div>
            <Badge variant="yellow" className="w-fit px-3 py-1">
              Race {matchNumber} - {match.circuit}
            </Badge>
          </div>
        </DialogHeader>

        <div className="py-6 px-6 space-y-6">
          {/* Race Info Banner */}
          <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg flex justify-between flex-wrap gap-4">
            <div className="flex flex-col space-y-0">
              <span className="text-xs text-muted-foreground font-bold">DATE & TIME</span>
              <span className="text-sm font-semibold">{match.date}</span>
              <span className="text-sm">{match.time}</span>
            </div>
            <div className="flex flex-col items-end space-y-0">
              <span className="text-xs text-muted-foreground font-bold">LOCATION</span>
              <span className="text-sm font-semibold">{match.location}</span>
              <span className="text-sm">{match.cc}</span>
            </div>
          </div>

          {/* Tabs for Pre-Race and Results */}
          <Tabs defaultValue={defaultTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="prospects">Pre-Race Prospects</TabsTrigger>
              <TabsTrigger value="results" disabled={!match.isFinished || !match.summary}>
                Race Results & Summary
              </TabsTrigger>
            </TabsList>

            {/* Pre-Race Prospects Tab */}
            <TabsContent value="prospects" className="space-y-4 mt-6">
              {/* Competitors */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🏁</span>
                  <h3 className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                    The Competitors
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {match.players.map((player) => (
                    <Badge
                      key={player.id}
                      variant="default"
                      className="px-3 py-1 cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => onPlayerClick(player)}
                    >
                      {player.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Pre-Race Analysis */}
              {match.prospect && (
                <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-xl border-l-4 border-orange-500">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">📊</span>
                    <h3 className="text-sm font-semibold text-orange-700 dark:text-orange-300">
                      Race Analysis
                    </h3>
                  </div>
                  <p className="text-md leading-relaxed">
                    {generateProspectElements(match, onPlayerClick).map((element) => {
                      if (typeof element === "string") {
                        return element;
                      }
                      // It's a player element
                      return (
                        <span
                          key={element.key}
                          className="text-blue-600 dark:text-blue-300 font-bold underline cursor-pointer hover:text-blue-700 dark:hover:text-blue-200"
                          onClick={element.onClick}
                        >
                          {element.player.name}
                        </span>
                      );
                    })}
                  </p>
                </div>
              )}

              {/* Fun disclaimer */}
              <p className="text-xs text-muted-foreground text-center italic pt-2">
                ⚠️ Predictions are for entertainment purposes only. Banana peels and blue shells may alter outcomes.
              </p>
            </TabsContent>

            {/* Race Results & Summary Tab */}
            <TabsContent value="results" className="space-y-4 mt-6">
              {/* Results Podium */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🏆</span>
                  <h3 className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                    Final Results
                  </h3>
                </div>
                <div className="space-y-3">
                  {match.players
                    .slice()
                    .sort((a, b) => (a.position || 0) - (b.position || 0))
                    .map((player) => {
                      const positionEmoji = getPositionEmoji(player.position);
                      const isQualified = player.position && player.position <= 2;

                      return (
                        <div
                          key={player.id}
                          className={`p-4 rounded-lg flex justify-between items-center border-l-4 cursor-pointer hover:scale-[1.02] transition-transform ${
                            player.position === 1
                              ? "bg-yellow-100 dark:bg-yellow-900 border-yellow-500"
                              : player.position === 2
                              ? "bg-yellow-100 dark:bg-yellow-900 border-yellow-500"
                              : "bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                          }`}
                          onClick={() => onPlayerClick(player)}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{positionEmoji}</span>
                            <div className="flex flex-col space-y-0">
                              <span className="font-bold text-lg">{player.name}</span>
                              {isQualified && (
                                <Badge variant="green" className="w-fit text-xs">
                                  ✅ Qualified
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* Race Summary */}
              {match.summary && (
                <div className="bg-green-50 dark:bg-green-900 p-6 rounded-xl border-l-4 border-green-500">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">📝</span>
                    <h3 className="text-sm font-semibold text-green-700 dark:text-green-300">
                      Race Summary
                    </h3>
                  </div>
                  <p className="text-md leading-relaxed">
                    {generateProspectElements({ ...match, prospect: match.summary }, onPlayerClick).map((element) => {
                      if (typeof element === "string") {
                        return element;
                      }
                      // It's a player element
                      return (
                        <span
                          key={element.key}
                          className="text-blue-600 dark:text-blue-300 font-bold underline cursor-pointer hover:text-blue-700 dark:hover:text-blue-200"
                          onClick={element.onClick}
                        >
                          {element.player.name}
                        </span>
                      );
                    })}
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};
