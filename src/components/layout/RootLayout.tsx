import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const RootLayout = () => {
  return (
    <Flex flexDir="column" align="center" gap="8" minH="100vh" w="full">
      <Outlet />
    </Flex>
  );
};

export default RootLayout;
