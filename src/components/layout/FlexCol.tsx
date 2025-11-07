import { Flex } from "@chakra-ui/react";

const FlexCol = ({ children }: { children: React.ReactNode }) => (
  <Flex pt="8" pb="32" px="16" flexDir="column" justify="space-between" align="flex-start" minH="calc(100vh - 48px)" gap="8">
    {children}
  </Flex>
);

export default FlexCol;
