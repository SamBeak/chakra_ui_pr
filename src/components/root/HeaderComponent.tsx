import { Box, GridItem, Heading, HStack } from "@chakra-ui/react";
import React from "react";

export default function HeaderComponent() {
  return (
    <GridItem gridArea={"header"}>
      <Box>
        <HStack>
          <Heading>Header</Heading>
        </HStack>
      </Box>
    </GridItem>
  );
}
