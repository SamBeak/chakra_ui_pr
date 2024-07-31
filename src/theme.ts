import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import breakpoints from "./breakpoints";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, breakpoints });

export default theme;
