import type { Tournament } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface RegistrationBadgeProps {
  tournament: Tournament;
}

export function RegistrationBadge({ tournament }: RegistrationBadgeProps) {
  // Count registered players (those without "Player XX" pattern in their name)
  const allPlayers = tournament.rounds[0].matches.flatMap((match) => match.players);
  const registeredPlayers = allPlayers.filter((player) => !player.name.match(/^Player \d+$/));
  const totalSpots = allPlayers.length;
  const availableSpots = totalSpots - registeredPlayers.length;
  const registrationPercentage = Math.round((registeredPlayers.length / totalSpots) * 100);

  const handleJoinClick = () => {
    const subject = encodeURIComponent("Mario Kart Tournament Registration");
    const body = encodeURIComponent(
      "Hi Pål,\n\nI would like to register for the Elhub Mario Kart World Christmas Tournament 2025.\n\nMy 3 preferred time slots are:\n1. [Date and time]\n2. [Date and time]\n3. [Date and time]\n\nBest regards,"
    );
    window.location.href = `mailto:pal.engen@statnett.no?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border-3 border-blue-500 dark:border-blue-300 overflow-hidden">
      <div className="flex flex-col space-y-0">
        {/* Header */}
        <div className="bg-blue-600 dark:bg-blue-400 w-full px-6 py-2 text-center">
          <span className="text-white font-bold text-lg tracking-wide">
            🏁 TOURNAMENT REGISTRATION 🏁
          </span>
        </div>

        {/* Main Content */}
        <div className="flex gap-6 px-6 py-4">
          {/* Registered Count */}
          <div className="flex flex-col space-y-1 min-w-[140px]">
            <span className="text-sm font-semibold">Registered Racers</span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                {registeredPlayers.length}
              </span>
              <span className="text-2xl font-medium">/ {totalSpots}</span>
            </div>
            <Badge variant="blue" className="w-fit px-2 py-1 text-xs">
              {registrationPercentage}% Full
            </Badge>
          </div>

          {/* Divider */}
          <div className="h-[70px] w-0.5 bg-blue-500 dark:bg-blue-300" />

          {/* Available Spots */}
          <div className="flex flex-col space-y-1 min-w-[140px]">
            <span className="text-sm font-semibold">
              {availableSpots > 0 ? "Spots Available" : "Tournament Full"}
            </span>
            <div
              className={`px-4 py-2 rounded-lg min-w-[80px] text-center ${
                availableSpots > 0
                  ? "bg-green-50 dark:bg-green-900"
                  : "bg-red-50 dark:bg-red-900"
              }`}
            >
              <span
                className={`text-3xl font-bold ${
                  availableSpots > 0
                    ? "text-green-700 dark:text-green-300"
                    : "text-red-700 dark:text-red-300"
                }`}
              >
                {availableSpots > 0 ? availableSpots : "0"}
              </span>
            </div>
            {availableSpots > 0 ? (
              <Button
                size="sm"
                variant="default"
                onClick={handleJoinClick}
                className="hover:scale-105 transition-transform bg-green-600 hover:bg-green-700"
              >
                <span className="mr-1">✨</span>
                Join Now!
              </Button>
            ) : (
              <Badge variant="destructive" className="w-fit px-2 py-1 text-xs">
                Registration Closed
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
