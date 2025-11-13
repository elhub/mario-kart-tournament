import {
  Box,
  Grid,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  Text,
  Heading,
  Divider,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import type { Tournament } from "@/types";
import { Round } from "@/components/Round";
import { BracketConnections } from "@/components/BracketConnections";
import { round1 } from "@/data/round1";
import { round2 } from "@/data/round2";
import { round3 } from "@/data/round3";
import { round4 } from "@/data/round4";

const tournament: Tournament = {
  id: "t1",
  rounds: [round1, round2, round3, round4],
};

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const roundOfSixteenPart1 = {
    ...tournament.rounds[0],
    matches: tournament.rounds[0].matches.slice(0, 4),
  };

  const roundOfSixteenPart2 = {
    ...tournament.rounds[0],
    matches: tournament.rounds[0].matches.slice(4),
  };

  const quarterfinalsPart1 = {
    ...tournament.rounds[1],
    matches: tournament.rounds[1].matches.slice(0, 2),
  };

  const quarterfinalsPart2 = {
    ...tournament.rounds[1],
    matches: tournament.rounds[1].matches.slice(2),
  };

  const semifinalsPart1 = {
    ...tournament.rounds[2],
    matches: tournament.rounds[2].matches.slice(0, 1),
  };

  const semifinalsPart2 = {
    ...tournament.rounds[2],
    matches: tournament.rounds[2].matches.slice(1),
  };

  const finals = {
    ...tournament.rounds[3],
    matches: tournament.rounds[3].matches.slice(0, 1),
  };

  return (
    <Box
      h="100vh"
      w="100vw"
      pt={8}
      pb={8}
      position="relative"
      overflow="auto"
      backgroundImage="url('/mario-kart-tournament/emkwt-bg-4.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
      _before={{
        content: '""',
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {/* Rules Button */}
      <Button
        position="fixed"
        top="75%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={10}
        colorScheme="blue"
        size="lg"
        onClick={onOpen}
        leftIcon={<Text>📋</Text>}
        boxShadow="xl"
      >
        Tournament Rules
      </Button>

      {/* Rules Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="2xl" scrollBehavior="inside">
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent bg={useColorModeValue("white", "gray.800")} maxH="90vh">
          <ModalHeader bg={useColorModeValue("blue.500", "blue.600")} color="white" borderTopRadius="md">
            <VStack align="start" spacing={1}>
              <Heading size="lg">🏁 ELHUB MARIO KART WORLD CHRISTMAS TOURNAMENT 2025 🏆</Heading>
            </VStack>
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody py={6}>
            <VStack align="stretch" spacing={6}>
              <Box>
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  Hey Elhub Racers! 🎮
                </Text>
                <Text>
                  Get ready to put your driving skills to the ultimate test! We're excited to announce the{" "}
                  <strong>Elhub Mario Kart World Christmas Tournament</strong> - where 32 of Elhub's finest racers will go
                  head-to-head in an epic battle for glory!
                </Text>
              </Box>

              <Divider />

              <Box>
                <Heading size="md" mb={3}>
                  🎯 What's at Stake?
                </Heading>
                <List spacing={2}>
                  <ListItem>
                    <Text>
                      ✅ Only <strong>32 spots available</strong> - first come, first served!
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>✅ Showcase your unique racing abilities and special skills</Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      ✅ <strong>Podium prizes</strong> for our top champions
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>✅ Bragging rights that'll last well into 2026!</Text>
                  </ListItem>
                </List>
              </Box>

              <Divider />

              <Box>
                <Heading size="md" mb={3}>
                  📅 Tournament Schedule
                </Heading>
                <List spacing={2}>
                  <ListItem>
                    <Text>
                      📍 <strong>One race per day</strong>, every weekday
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>📍 December 1st - December 19th</Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      📍 <strong>Time:</strong> 11:30 AM sharp (don't be late!)
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      📍 <strong>Location:</strong> Huben
                    </Text>
                  </ListItem>
                </List>
              </Box>

              <Divider />

              <Box>
                <Heading size="md" mb={3}>
                  🏎️ Tournament Format
                </Heading>
                <List spacing={2}>
                  <ListItem>
                    <Text>🏁 Single elimination bracket</Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      🏁 <strong>Top 2 finishers</strong> from each race advance to the next round
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>🏁 Circuits and CC classes have been pre-selected for each race</Text>
                  </ListItem>
                  <ListItem>
                    <Text>🏁 Choose your in-game character wisely - it could make all the difference!</Text>
                  </ListItem>
                </List>
              </Box>

              <Divider />

              <Box>
                <Heading size="md" mb={3}>
                  📊 Check Out the Brackets!
                </Heading>
                <Text>
                  You're already viewing the full tournament bracket! Explore the matchups, track your favorite racers, and
                  plan your path to victory. Click on player names to see their unique abilities and racing styles!
                </Text>
              </Box>

              <Divider />

              <Box bg={useColorModeValue("red.50", "red.900")} p={4} borderRadius="md" borderLeft="4px solid red">
                <Heading size="md" mb={3} color={useColorModeValue("red.700", "red.300")}>
                  ⚠️ MOST IMPORTANT: HOW TO REGISTER
                </Heading>
                <Text fontWeight="bold" mb={2}>
                  Registration is now OPEN - First come, first served!
                </Text>
                <Text fontWeight="bold" mb={3}>
                  To register, send an email to Pål Oskar with 3 race brackets that fit your schedule.
                </Text>
                <List spacing={2}>
                  <ListItem>✅ Choose 3 time slots that work for you to maximize your chances</ListItem>
                  <ListItem>✅ Registration open until all 32 spots are filled</ListItem>
                  <ListItem>✅ Players will be added to brackets as registrations are received</ListItem>
                  <ListItem>
                    ✅ <strong>Follow the bracket page for updates on the schedule</strong>
                  </ListItem>
                  <ListItem>
                    ✅ <strong>Info meeting will be held once all racers are signed up</strong>
                  </ListItem>
                </List>
                <Text mt={3} fontStyle="italic">
                  Don't wait too long - spots will fill up fast!
                </Text>
              </Box>

              <Divider />

              <Box>
                <Heading size="md" mb={3}>
                  ⚡ Quick Facts
                </Heading>
                <List spacing={2}>
                  <ListItem>✅ 32 racers enter, 1 champion emerges</ListItem>
                  <ListItem>✅ Daily races at 11:30 AM</ListItem>
                  <ListItem>✅ Pre-selected circuits and CC classes</ListItem>
                  <ListItem>✅ Prizes for the podium</ListItem>
                  <ListItem>✅ Email Pål Oskar with your 3 preferred time slots to register!</ListItem>
                </List>
              </Box>

              <Box textAlign="center" py={4}>
                <Text fontSize="xl" fontWeight="bold">
                  May the blue shells be ever in your favor! 🐢💨
                </Text>
                <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")} mt={2}>
                  See you on the track,
                  <br />
                  <strong>The Tournament Committee</strong>
                </Text>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>

      <BracketConnections />
      <Grid
        id="bracket-grid"
        templateColumns="repeat(7, 1fr)"
        templateRows="repeat(4, 1fr)"
        w="full"
        gap={8}
        my={8}
        mx={8}
        position="relative"
        zIndex={1}
      >
        {/* === Column 1 (4 small boxes) === */}
        <Round round={roundOfSixteenPart1} columnId={1} />

        {/* === Column 2 (2 medium boxes) === */}
        <Round round={quarterfinalsPart1} columnId={2} />

        {/* === Column 3,4,5 (1 tall box) === */}
        <Round round={semifinalsPart1} columnId={3} />
        <Round round={finals} columnId={4} />
        <Round round={semifinalsPart2} columnId={5} />

        {/* === Column 6 (2 medium boxes) === */}
        <Round round={quarterfinalsPart2} columnId={6} />

        {/* === Column 7 (4 small boxes) === */}
        <Round round={roundOfSixteenPart2} columnId={7} />
      </Grid>
    </Box>
  );
}

export default App;
