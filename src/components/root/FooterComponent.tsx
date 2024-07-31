import { Box, GridItem, Heading, HStack } from "@chakra-ui/react";
import React from "react";

export default function FooterComponent() {
  return (
    <GridItem gridArea={"footer"}>
      <Box>
        <HStack>
          <Heading>Footer</Heading>
        </HStack>
      </Box>
    </GridItem>
  );
}
