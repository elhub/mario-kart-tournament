import { Box, HStack, Text, VStack, Badge, Button, useColorModeValue } from "@chakra-ui/react";
import type { Tournament } from "@/types";

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

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("blue.500", "blue.300");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("blue.600", "blue.400");
  const spotsBgColor =
    availableSpots > 0 ? useColorModeValue("green.50", "green.900") : useColorModeValue("red.50", "red.900");
  const spotsTextColor =
    availableSpots > 0 ? useColorModeValue("green.700", "green.300") : useColorModeValue("red.700", "red.300");

  const handleJoinClick = () => {
    const subject = encodeURIComponent("Mario Kart Tournament Registration");
    const body = encodeURIComponent(
      "Hi Pål,\n\nI would like to register for the Elhub Mario Kart World Christmas Tournament 2025.\n\nMy 3 preferred time slots are:\n1. [Date and time]\n2. [Date and time]\n3. [Date and time]\n\nBest regards,"
    );
    window.location.href = `mailto:pal.engen@statnett.no?subject=${subject}&body=${body}`;
  };

  return (
    <Box bg={bgColor} borderRadius="xl" boxShadow="2xl" border="3px solid" borderColor={borderColor} overflow="hidden">
      <VStack spacing={0}>
        {/* Header */}
        <Box bg={accentColor} w="full" px={6} py={2} textAlign="center">
          <Text color="white" fontWeight="bold" fontSize="lg" letterSpacing="wide">
            🏁 TOURNAMENT REGISTRATION 🏁
          </Text>
        </Box>

        {/* Main Content */}
        <HStack spacing={6} px={6} py={4}>
          {/* Registered Count */}
          <VStack spacing={1} minW="140px">
            <Text fontSize="sm" color={textColor} fontWeight="semibold">
              Registered Racers
            </Text>
            <HStack spacing={2} align="baseline">
              <Text fontSize="4xl" fontWeight="bold" color={accentColor}>
                {registeredPlayers.length}
              </Text>
              <Text fontSize="2xl" color={textColor} fontWeight="medium">
                / {totalSpots}
              </Text>
            </HStack>
            <Badge colorScheme="blue" fontSize="xs" px={2} py={1}>
              {registrationPercentage}% Full
            </Badge>
          </VStack>

          {/* Divider */}
          <Box h="70px" w="2px" bg={borderColor} />

          {/* Available Spots */}
          <VStack spacing={1} minW="140px">
            <Text fontSize="sm" color={textColor} fontWeight="semibold">
              {availableSpots > 0 ? "Spots Available" : "Tournament Full"}
            </Text>
            <Box bg={spotsBgColor} px={4} py={2} borderRadius="lg" minW="80px" textAlign="center">
              <Text fontSize="3xl" fontWeight="bold" color={spotsTextColor}>
                {availableSpots > 0 ? availableSpots : "0"}
              </Text>
            </Box>
            {availableSpots > 0 ? (
              <Button
                size="sm"
                colorScheme="green"
                onClick={handleJoinClick}
                leftIcon={<Text>✨</Text>}
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s"
              >
                Join Now!
              </Button>
            ) : (
              <Badge colorScheme="red" fontSize="xs" px={2} py={1}>
                Registration Closed
              </Badge>
            )}
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
}
