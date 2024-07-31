import { Grid } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./root/HeaderComponent";
import FooterComponent from "./root/FooterComponent";
import NavComponent from "./root/NavComponent";

export default function Root() {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"header" "nav" "main" "footer"`,
        md: `"header" "nav" "main" "footer"`,
        lg: `"header header"
             "nav main"
             "footer footer"`,
        xl: `"header header"
             "nav main"
             "footer footer"`,
        "2xl": `"header header"
                "nav main"
                "footer footer"`,
      }}
      gridTemplateColumns={{
        base: `1fr`,
        md: `1fr`,
        lg: `15rem 1fr`,
        xl: `20rem 1fr`,
        "2xl": `20rem 1fr`,
      }}
      gridTemplateRows={{
        base: `auto auto 1fr auto`,
        md: `auto auto 1fr auto`,
        lg: `10rem 1fr 5rem`,
        xl: `15rem 1fr 10rem`,
      }}
      h="100vh"
      w="100vw"
      p="1rem"
    >
      <HeaderComponent />
      <NavComponent />
      <Outlet />
      <FooterComponent />
    </Grid>
  );
}
