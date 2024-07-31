import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./root/HeaderComponent";
import FooterComponent from "./root/FooterComponent";
import NavComponent from "./root/NavComponent";

export default function Root() {
  return (
    <Box w="100%" p="1rem">
      <Grid
        gridTemplateAreas={{
          base: `"header" "nav" "main"`,
          md: `"header" "nav" "main"`,
          lg: `"header header"
                "nav main"`,
          xl: `"header header"
                "nav main"`,
          "2xl": `"header header"
                  "nav main"`,
        }}
        gridTemplateColumns={{
          base: `1fr`,
          md: `1fr`,
          lg: `15rem 1fr`,
          xl: `20rem 1fr`,
          "2xl": `20rem 1fr`,
        }}
        gridTemplateRows={{
          base: `auto auto 1fr`,
          md: `auto auto 1fr`,
          lg: `8rem 1fr`,
          xl: `8rem 1fr`,
        }}
        h="100vh"
        w="100%"
      >
        <HeaderComponent />
        <NavComponent />
        <Outlet />
      </Grid>
      <FooterComponent />
    </Box>
  );
}
