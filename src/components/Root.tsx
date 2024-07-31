import { Grid } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./root/HeaderComponent";
import FooterComponent from "./root/FooterComponent";
import NavComponent from "./root/NavComponent";

export default function Root() {
    return (
        <Grid
            gridTemplateAreas={`"header header"
                                "nav main"
                                "footer footer"`}
            gridTemplateColumns={`20rem 1fr`}
            gridTemplateRows={`15rem 1fr 10rem`}
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
