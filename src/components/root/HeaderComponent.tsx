import React from "react";
import {
  Box,
  Flex,
  GridItem,
  Link as ChakraLink,
  Skeleton,
  Image,
} from "@chakra-ui/react";
import { Link as router } from "react-router-dom";
import mainLogo from "@assets/images/main_logo.png";

export default function HeaderComponent() {
  return (
    <GridItem gridArea={"header"}>
      <Flex>
        <Box>
          <Skeleton isLoaded={true}>
            <ChakraLink as={router} to="/">
              <Image src={mainLogo} alt="logo" />
            </ChakraLink>
          </Skeleton>
        </Box>
        <Box></Box>
        <Box></Box>
      </Flex>
    </GridItem>
  );
}
