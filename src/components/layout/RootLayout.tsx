import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Header from "@/components/header";

const RootLayout = () => {
  return (
    <Flex flexDir="column" minH="100vh">
      <Header />
      <Flex flexDir="column" align="center" gap="8" minH="calc(100vh - 48px)" w="full">
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default RootLayout;
