import { Box, GridItem, Heading, HStack } from "@chakra-ui/react";
import React from "react";

export default function NavComponent() {
  return (
    <GridItem gridArea={"nav"}>
      <Box>
        <HStack>
          <Heading>Nav</Heading>
        </HStack>
      </Box>
    </GridItem>
  );
}
