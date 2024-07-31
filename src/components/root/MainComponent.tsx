import { Box, GridItem, Heading, HStack } from "@chakra-ui/react";
import React from "react";

export default function MainComponent() {
  return (
    <GridItem gridArea={"main"}>
      <Box>
        <HStack>
          <Heading>Main</Heading>
        </HStack>
      </Box>
    </GridItem>
  );
}
