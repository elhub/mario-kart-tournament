import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  HStack,
  Text,
  Heading,
  Badge,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
} from "@chakra-ui/react";
import type { Race, Player } from "@/types";
import { generateProspectElements } from "@/utils/prospectUtils";

interface RaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  match: Race;
  onPlayerClick: (player: Player) => void;
}

export const RaceModal = ({ isOpen, onClose, match, onPlayerClick }: RaceModalProps) => {
  const labelColor = useColorModeValue("gray.600", "gray.400");
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

  // Determine default tab index based on race status
  const defaultIndex = match.isFinished && match.summary ? 1 : 0;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay backdropFilter="blur(4px)" />
      <ModalContent bg={useColorModeValue("white", "gray.800")} borderRadius="2xl" boxShadow="2xl" mx={4}>
        <ModalHeader bg={useColorModeValue("purple.500", "purple.600")} color="white" borderTopRadius="2xl" py={6}>
          <VStack align="start" spacing={2}>
            <HStack>
              <Text fontSize="3xl">{match.isFinished ? "🏁" : "🔮"}</Text>
              <Heading size="lg">{match.isFinished ? "Race Complete" : "Pre-Race Prospects"}</Heading>
            </HStack>
            <Badge colorScheme="yellow" fontSize="sm" px={3} py={1} borderRadius="full">
              Race {matchNumber} - {match.circuit}
            </Badge>
          </VStack>
        </ModalHeader>
        <ModalCloseButton color="white" size="lg" />
        <ModalBody py={8} px={6}>
          <VStack spacing={6} align="stretch">
            {/* Race Info Banner */}
            <HStack
              bg={useColorModeValue("purple.50", "purple.900")}
              p={4}
              borderRadius="lg"
              justify="space-between"
              flexWrap="wrap"
              spacing={4}
            >
              <VStack align="start" spacing={0}>
                <Text fontSize="xs" color={labelColor} fontWeight="bold">
                  DATE & TIME
                </Text>
                <Text fontSize="sm" fontWeight="semibold">
                  {match.date}
                </Text>
                <Text fontSize="sm">{match.time}</Text>
              </VStack>
              <VStack align="end" spacing={0}>
                <Text fontSize="xs" color={labelColor} fontWeight="bold">
                  LOCATION
                </Text>
                <Text fontSize="sm" fontWeight="semibold">
                  {match.location}
                </Text>
                <Text fontSize="sm">{match.cc}</Text>
              </VStack>
            </HStack>

            {/* Tabs for Pre-Race and Results */}
            <Tabs defaultIndex={defaultIndex} colorScheme="purple">
              <TabList>
                <Tab isDisabled={match.isFinished && match.summary ? false : false}>Pre-Race Prospects</Tab>
                <Tab isDisabled={!match.isFinished || !match.summary}>Race Results & Summary</Tab>
              </TabList>

              <TabPanels>
                {/* Pre-Race Prospects Tab */}
                <TabPanel px={0} pt={6}>
                  <VStack spacing={4} align="stretch">
                    {/* Competitors */}
                    <Box>
                      <HStack mb={3}>
                        <Text fontSize="2xl">🏁</Text>
                        <Heading size="sm" color={useColorModeValue("purple.700", "purple.300")}>
                          The Competitors
                        </Heading>
                      </HStack>
                      <HStack spacing={3} flexWrap="wrap" justify="center">
                        {match.players.map((player) => (
                          <Badge
                            key={player.id}
                            colorScheme="purple"
                            fontSize="sm"
                            px={3}
                            py={1}
                            borderRadius="full"
                            cursor="pointer"
                            _hover={{ transform: "scale(1.05)", boxShadow: "md" }}
                            onClick={() => onPlayerClick(player)}
                          >
                            {player.name}
                          </Badge>
                        ))}
                      </HStack>
                    </Box>

                    {/* Pre-Race Analysis */}
                    {match.prospect && (
                      <Box
                        bg={useColorModeValue("orange.50", "orange.900")}
                        p={6}
                        borderRadius="xl"
                        borderLeft="4px solid"
                        borderColor="orange.500"
                      >
                        <HStack mb={3}>
                          <Text fontSize="2xl">📊</Text>
                          <Heading size="sm" color={useColorModeValue("orange.700", "orange.300")}>
                            Race Analysis
                          </Heading>
                        </HStack>
                        <Text fontSize="md" lineHeight="tall" color={useColorModeValue("gray.700", "gray.200")}>
                          {generateProspectElements(match, onPlayerClick).map((element) => {
                            if (typeof element === "string") {
                              return element;
                            }
                            // It's a player element
                            return (
                              <Text
                                as="span"
                                key={element.key}
                                color={useColorModeValue("blue.600", "blue.300")}
                                fontWeight="bold"
                                textDecoration="underline"
                                cursor="pointer"
                                _hover={{
                                  color: useColorModeValue("blue.700", "blue.200"),
                                  textDecoration: "underline",
                                }}
                                onClick={element.onClick}
                              >
                                {element.player.name}
                              </Text>
                            );
                          })}
                        </Text>
                      </Box>
                    )}

                    {/* Fun disclaimer */}
                    <Text fontSize="xs" color={labelColor} textAlign="center" fontStyle="italic" pt={2}>
                      ⚠️ Predictions are for entertainment purposes only. Banana peels and blue shells may alter outcomes.
                    </Text>
                  </VStack>
                </TabPanel>

                {/* Race Results & Summary Tab */}
                <TabPanel px={0} pt={6}>
                  <VStack spacing={4} align="stretch">
                    {/* Results Podium */}
                    <Box>
                      <HStack mb={3}>
                        <Text fontSize="2xl">🏆</Text>
                        <Heading size="sm" color={useColorModeValue("purple.700", "purple.300")}>
                          Final Results
                        </Heading>
                      </HStack>
                      <VStack spacing={3} align="stretch">
                        {match.players
                          .slice()
                          .sort((a, b) => (a.position || 0) - (b.position || 0))
                          .map((player) => {
                            const positionEmoji = getPositionEmoji(player.position);
                            const isQualified = player.position && player.position <= 2;

                            return (
                              <HStack
                                key={player.id}
                                bg={
                                  player.position === 1
                                    ? useColorModeValue("yellow.100", "yellow.900")
                                    : player.position === 2
                                    ? useColorModeValue("yellow.100", "yellow.900")
                                    : useColorModeValue("gray.50", "gray.700")
                                }
                                p={4}
                                borderRadius="lg"
                                justify="space-between"
                                borderLeft="4px solid"
                                borderColor={
                                  player.position === 1 ? "yellow.500" : player.position === 2 ? "yellow.500" : "gray.300"
                                }
                                cursor="pointer"
                                _hover={{ transform: "scale(1.02)", boxShadow: "md" }}
                                onClick={() => onPlayerClick(player)}
                              >
                                <HStack spacing={3}>
                                  <Text fontSize="2xl">{positionEmoji}</Text>
                                  <VStack align="start" spacing={0}>
                                    <Text fontWeight="bold" fontSize="lg">
                                      {player.name}
                                    </Text>
                                    {isQualified && (
                                      <Badge colorScheme="green" fontSize="xs">
                                        ✅ Qualified
                                      </Badge>
                                    )}
                                  </VStack>
                                </HStack>
                              </HStack>
                            );
                          })}
                      </VStack>
                    </Box>

                    {/* Race Summary */}
                    {match.summary && (
                      <Box
                        bg={useColorModeValue("green.50", "green.900")}
                        p={6}
                        borderRadius="xl"
                        borderLeft="4px solid"
                        borderColor="green.500"
                      >
                        <HStack mb={3}>
                          <Text fontSize="2xl">📝</Text>
                          <Heading size="sm" color={useColorModeValue("green.700", "green.300")}>
                            Race Summary
                          </Heading>
                        </HStack>
                        <Text fontSize="md" lineHeight="tall" color={useColorModeValue("gray.700", "gray.200")}>
                          {generateProspectElements({ ...match, prospect: match.summary }, onPlayerClick).map((element) => {
                            if (typeof element === "string") {
                              return element;
                            }
                            // It's a player element
                            return (
                              <Text
                                as="span"
                                key={element.key}
                                color={useColorModeValue("blue.600", "blue.300")}
                                fontWeight="bold"
                                textDecoration="underline"
                                cursor="pointer"
                                _hover={{
                                  color: useColorModeValue("blue.700", "blue.200"),
                                  textDecoration: "underline",
                                }}
                                onClick={element.onClick}
                              >
                                {element.player.name}
                              </Text>
                            );
                          })}
                        </Text>
                      </Box>
                    )}
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
