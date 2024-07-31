import { Box, Heading, HStack } from "@chakra-ui/react";
import React from "react";

export default function FooterComponent() {
  return (
    <Box
      w="100%"
      h={{
        base: "4rem",
        md: "5rem",
        lg: "6rem",
        xl: "7rem",
        "2xl": "8rem",
      }}
    >
      <HStack>
        <Heading>Footer</Heading>
      </HStack>
    </Box>
  );
}
