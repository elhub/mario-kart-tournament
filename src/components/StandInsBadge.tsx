import {
  Box,
  HStack,
  Text,
  VStack,
  Badge,
  useColorModeValue,
  Tooltip,
  Wrap,
  WrapItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { playerProfiles, standInPlayerIds } from "@/data/players";
import type { Player } from "@/types";

export function StandInsBadge() {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("purple.500", "purple.300");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("purple.600", "purple.400");
  const cardBgColor = useColorModeValue("purple.50", "purple.900");
  const cardBorderColor = useColorModeValue("purple.200", "purple.700");
  const labelColor = useColorModeValue("gray.600", "gray.400");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPlayer, setSelectedPlayer] = useState<Omit<Player, "position"> | null>(null);

  const standIns = standInPlayerIds.map((id) => playerProfiles[id]);

  const handlePlayerClick = (player: Omit<Player, "position">) => {
    setSelectedPlayer(player);
    onOpen();
  };

  return (
    <Box bg={bgColor} borderRadius="xl" boxShadow="2xl" border="3px solid" borderColor={borderColor} overflow="hidden">
      <VStack spacing={0}>
        {/* Header */}
        <Box bg={accentColor} w="full" px={6} py={2} textAlign="center">
          <Text color="white" fontWeight="bold" fontSize="lg" letterSpacing="wide">
            🏃 AVAILABLE STAND-INS 🏃
          </Text>
        </Box>

        {/* Main Content */}
        <VStack spacing={4} px={6} py={4} w="full">
          <Text fontSize="sm" color={textColor} textAlign="center" fontWeight="semibold">
            Need a substitute? These racers are ready to jump in!
          </Text>

          <Wrap spacing={3} justify="center">
            {standIns.map((standIn) => (
              <WrapItem key={standIn.id}>
                <Tooltip
                  label={
                    <Box p={2}>
                      <Text fontWeight="bold" mb={1}>
                        {standIn.name}
                      </Text>
                      <Text fontSize="sm" mb={2}>
                        {standIn.description?.replace("{name}", standIn.name)}
                      </Text>
                      <HStack spacing={2} flexWrap="wrap">
                        {standIn.attributes?.map((attr, idx) => (
                          <Badge key={idx} colorScheme="purple" fontSize="xs">
                            {attr.emoji} {attr.label}
                          </Badge>
                        ))}
                      </HStack>
                    </Box>
                  }
                  placement="top"
                  hasArrow
                  bg={useColorModeValue("gray.700", "gray.900")}
                  color="white"
                  p={3}
                  borderRadius="md"
                >
                  <Box
                    bg={cardBgColor}
                    px={4}
                    py={3}
                    borderRadius="lg"
                    border="2px solid"
                    borderColor={cardBorderColor}
                    cursor="pointer"
                    transition="all 0.2s"
                    _hover={{
                      transform: "scale(1.05)",
                      borderColor: accentColor,
                      boxShadow: "lg",
                    }}
                    onClick={() => handlePlayerClick(standIn)}
                  >
                    <VStack spacing={1}>
                      <Text fontSize="lg" fontWeight="bold" color={accentColor}>
                        {standIn.name}
                      </Text>
                      <HStack spacing={1}>
                        {standIn.attributes?.map((attr, idx) => (
                          <Text key={idx} fontSize="lg">
                            {attr.emoji}
                          </Text>
                        ))}
                      </HStack>
                    </VStack>
                  </Box>
                </Tooltip>
              </WrapItem>
            ))}
          </Wrap>

          <Badge colorScheme="purple" fontSize="xs" px={3} py={1}>
            {standIns.length} Stand-ins Available
          </Badge>
        </VStack>
      </VStack>

      {/* Player Info Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent bg={useColorModeValue("white", "gray.800")} borderRadius="2xl" boxShadow="2xl" mx={4}>
          <ModalHeader bg={useColorModeValue("purple.500", "purple.600")} color="white" borderTopRadius="2xl" py={6}>
            <VStack align="start" spacing={2}>
              <HStack>
                <Text fontSize="3xl">🏎️</Text>
                <Heading size="lg">{selectedPlayer?.name}</Heading>
              </HStack>
              <Badge colorScheme="yellow" fontSize="sm" px={3} py={1} borderRadius="full">
                Stand-In Racer
              </Badge>
            </VStack>
          </ModalHeader>
          <ModalCloseButton color="white" size="lg" />
          <ModalBody py={8} px={6}>
            <VStack spacing={6} align="stretch">
              <Box
                bg={useColorModeValue("purple.50", "purple.900")}
                p={6}
                borderRadius="xl"
                borderLeft="4px solid"
                borderColor="purple.500"
              >
                <HStack mb={3}>
                  <Text fontSize="2xl">⚡</Text>
                  <Heading size="sm" color={useColorModeValue("purple.700", "purple.300")}>
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
    </Box>
  );
}
