import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router";

const Header = () => {
  return (
    <Flex bg="blue.100" gap="16" justify="center" py="2">
      <ChakraLink as={Link} to="/" bg="white" py="1" px="2">
        Home
      </ChakraLink>
      <ChakraLink as={Link} to="/mv" bg="white" py="1" px="2">
        MV Page
      </ChakraLink>
      <ChakraLink as={Link} to="/tournament" bg="white" py="1" px="2">
        Tournament
      </ChakraLink>
    </Flex>
  );
};

export default Header;
