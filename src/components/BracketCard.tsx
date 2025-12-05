import {
  Box,
  VStack,
  Text,
  useColorModeValue,
  Heading,
  HStack,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import type { Race, Player } from "@/types";
import { RaceModal } from "./RaceModal";

export const BracketCard = ({ match, roundName, rowIndex }: { match: Race; roundName: string; rowIndex: number }) => {
  const bg = useColorModeValue("white", "gray.700");
  const border = useColorModeValue("gray.400", "gray.700");
  const headerBg = useColorModeValue("blue.50", "blue.900");
  const footerBg = useColorModeValue("gray.50", "gray.800");
  const labelColor = useColorModeValue("gray.600", "gray.400");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isRaceModalOpen, onOpen: onRaceModalOpen, onClose: onRaceModalClose } = useDisclosure();
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  // Extract match number from id (e.g., "m1" -> "1")
  const matchNumber = match.id.replace(/\D/g, "");

  const handlePlayerClick = (player: Player) => {
    // Don't open modal for placeholder players (Player X format) or players without description
    if (!player.description || player.name.match(/^Player \d+$/)) {
      return;
    }
    setSelectedPlayer(player);
    onOpen();
  };

  // Handle player click from race modal
  const handleRaceModalPlayerClick = (player: Player) => {
    // Don't close the race modal - keep it open in the background
    // Just open the player modal with the selected player
    setSelectedPlayer(player);
    onOpen();
  };

  // Check if all players have real names (not placeholder "Player X")
  const allPlayersAssigned = match.players.every((p) => !p.name.match(/^Player \d+$/));

  // Check if race has prospect/summary content to show
  const hasRaceContent = !!match.prospect || !!match.summary;

  // Handle card click for race modal
  const handleCardClick = (e: React.MouseEvent) => {
    // Only show race modal if:
    // 1. All players are assigned
    // 2. Click is on the card itself (not on players)
    // 3. Race has prospect or summary to show
    if (allPlayersAssigned && hasRaceContent && !(e.target as HTMLElement).closest("[data-player-id]")) {
      onRaceModalOpen();
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
      case 4:
        return "4️⃣";
      default:
        return null;
    }
  };

  // Helper function to get background color for qualified players
  const getPlayerBg = (player: Player, isHovered: boolean) => {
    if (!match.isFinished || !player.position) {
      return isHovered ? useColorModeValue("gray.50", "gray.600") : "transparent";
    }

    // 1st and 2nd place get highlighted backgrounds
    if (player.position === 1) {
      return isHovered ? useColorModeValue("yellow.300", "yellow.700") : useColorModeValue("yellow.200", "yellow.800");
    }
    if (player.position === 2) {
      return isHovered ? useColorModeValue("yellow.300", "yellow.700") : useColorModeValue("yellow.200", "yellow.800");
    }

    // 3rd and 4th place remain normal
    return isHovered ? useColorModeValue("gray.50", "gray.600") : "transparent";
  };

  return (
    <Box position="relative" my="auto">
      {rowIndex === 0 && (
        <Heading position="absolute" top="-35px" w="210px" size="md" color="gray.700" textAlign="center">
          {roundName}
        </Heading>
      )}
      <Box
        position="relative"
        id={match.id}
        w="210px"
        /* h="fit-content" */
        borderWidth="1px"
        borderColor={border}
        borderRadius="lg"
        bg={bg}
        boxShadow="2xl"
        overflow="hidden"
        onClick={handleCardClick}
        cursor={allPlayersAssigned && hasRaceContent ? "pointer" : "default"}
        transition="all 0.2s"
        _hover={
          allPlayersAssigned && hasRaceContent
            ? {
                transform: "scale(1.02)",
                boxShadow: "2xl",
                borderColor: useColorModeValue("blue.400", "blue.500"),
              }
            : {}
        }
      >
        {/* Finished Race Flag */}
        {match.isFinished && (
          <Box position="absolute" top={0} right={1} fontSize="xl" zIndex={1} className="finished-flag">
            🏁
          </Box>
        )}

        {/* Header Section - Race Info */}
        <Box bg={headerBg} px={3} py={2} borderBottom="1px solid" borderColor={border}>
          <VStack spacing={0} align="start">
            <Text fontSize="xs" fontWeight="bold" color={labelColor}>
              Race {matchNumber}
            </Text>
            <Text fontSize="xs" fontWeight="medium">
              {match.date}
            </Text>
            <Text fontSize="xs" color={labelColor}>
              {match.time}
            </Text>
            <Text fontSize="xs" fontWeight="medium">
              @{match.location}
            </Text>
          </VStack>
        </Box>

        {/* Players Section */}
        <VStack spacing={0} /* py={2} */ align="stretch" borderY="1px solid" borderColor={border}>
          {match.players.map((p, index) => {
            const [isHovered, setIsHovered] = useState(false);
            const isPlaceholder = Boolean(p.name.match(/^Player \d+$/));
            const isClickable = p.description && !isPlaceholder;

            return (
              <Tooltip
                key={p.id}
                label={
                  p.description && !isPlaceholder ? (
                    <Box p={2}>
                      <Text fontWeight="bold" mb={1}>
                        {p.name}
                      </Text>
                      <Text fontSize="sm" mb={2}>
                        {p.description.replace("{name}", p.name)}
                      </Text>
                      <HStack spacing={2} flexWrap="wrap">
                        {p.attributes?.map((attr, idx) => (
                          <Badge key={idx} colorScheme="blue" fontSize="xs">
                            {attr.emoji} {attr.label}
                          </Badge>
                        ))}
                      </HStack>
                    </Box>
                  ) : (
                    ""
                  )
                }
                placement="right"
                hasArrow
                bg={useColorModeValue("gray.700", "gray.900")}
                color="white"
                p={3}
                borderRadius="md"
                isDisabled={isPlaceholder || !p.description}
              >
                <Box
                  w="full"
                  py={0}
                  px={3}
                  borderBottom={index < match.players.length - 1 ? "1px solid" : "none"}
                  borderColor={border}
                  bg={getPlayerBg(p, isHovered)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  cursor={isClickable ? "pointer" : "default"}
                  transition="background 0.2s"
                  onClick={() => handlePlayerClick(p)}
                  data-player-id={p.id}
                  data-position={p.position}
                >
                  <HStack justify="space-between" w="full">
                    <Text fontWeight="semibold" fontSize="sm">
                      {p.name}
                    </Text>
                    {match.isFinished && p.position && <Text fontSize="lg">{getPositionEmoji(p.position)}</Text>}
                  </HStack>
                </Box>
              </Tooltip>
            );
          })}
        </VStack>

        {/* Footer Section - Circuit & CC */}
        <Box bg={footerBg} px={3} py={2} borderTop="1px solid" borderColor={border}>
          <HStack justify="space-between" spacing={2}>
            <VStack align="start" spacing={0} flex={1}>
              <Text fontSize="xs" color={labelColor}>
                Circuit
              </Text>
              <Badge colorScheme="purple" fontSize="2xs">
                {match.circuit}
              </Badge>
            </VStack>
            <VStack align="end" spacing={0} flex={1}>
              <Text fontSize="xs" color={labelColor}>
                CC
              </Text>
              <Badge colorScheme="green" fontSize="2xs">
                {match.cc}
              </Badge>
            </VStack>
          </HStack>
        </Box>

        {/* Player Info Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
          <ModalOverlay backdropFilter="blur(4px)" />
          <ModalContent bg={useColorModeValue("white", "gray.800")} borderRadius="2xl" boxShadow="2xl" mx={4}>
            <ModalHeader bg={useColorModeValue("blue.500", "blue.600")} color="white" borderTopRadius="2xl" py={6}>
              <VStack align="start" spacing={2}>
                <HStack>
                  <Text fontSize="3xl">🏎️</Text>
                  <Heading size="lg">{selectedPlayer?.name}</Heading>
                </HStack>
                <Badge colorScheme="yellow" fontSize="sm" px={3} py={1} borderRadius="full">
                  Mario Kart Champion
                </Badge>
              </VStack>
            </ModalHeader>
            <ModalCloseButton color="white" size="lg" />
            <ModalBody py={8} px={6}>
              <VStack spacing={6} align="stretch">
                <Box
                  bg={useColorModeValue("blue.50", "blue.900")}
                  p={6}
                  borderRadius="xl"
                  borderLeft="4px solid"
                  borderColor="blue.500"
                >
                  <HStack mb={3}>
                    <Text fontSize="2xl">⚡</Text>
                    <Heading size="sm" color={useColorModeValue("blue.700", "blue.300")}>
                      Unique Abilities
                    </Heading>
                  </HStack>
                  <Text fontSize="md" lineHeight="tall" color={useColorModeValue("gray.700", "gray.200")}>
                    {selectedPlayer?.description?.replace(/\{name\}/g, selectedPlayer.name)}
                  </Text>
                </Box>

                {selectedPlayer?.attributes && selectedPlayer.attributes.length > 0 && (
                  <HStack justify="center" spacing={4} pt={2} flexWrap="wrap">
                    {selectedPlayer.attributes.map((attr, index) => (
                      <VStack key={index}>
                        <Text fontSize="3xl">{attr.emoji}</Text>
                        <Text fontSize="xs" color={labelColor} textAlign="center">
                          {attr.label}
                        </Text>
                      </VStack>
                    ))}
                  </HStack>
                )}
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Race Modal (Pre-Race Prospects & Results) */}
        <RaceModal
          isOpen={isRaceModalOpen}
          onClose={onRaceModalClose}
          match={match}
          onPlayerClick={handleRaceModalPlayerClick}
        />
      </Box>
    </Box>
  );
};
