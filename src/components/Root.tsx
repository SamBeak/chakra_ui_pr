import React from "react";
import { Grid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./main/HeaderComponent";
import FooterComponent from "./main/FooterComponent";
import NavComponent from "./main/NavComponent";

export default function Root() {
    return (
        <Grid
            gridTemplateAreas={`"header header"
                                "nav main"
                                "footer footer"`}
            gridTemplateColumns={`10rem 1fr`}
            gridTemplateRows={`15rem 1fr 15rem`}
            h="100vh"
            p="1rem"
            gap="1rem"
            w="100%"
        >
            <HeaderComponent />
            <NavComponent />
            <Outlet />
            <FooterComponent />
        </Grid>
    );
}
