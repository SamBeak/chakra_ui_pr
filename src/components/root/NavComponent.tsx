import { Box, GridItem, Heading, VStack } from "@chakra-ui/react";
import React from "react";

export default function NavComponent() {
    return (
        <GridItem gridArea={"nav"}>
            <Box>
                <VStack>
                    <Heading>Nav</Heading>
                </VStack>
            </Box>
        </GridItem>
    );
}
