import { createTheme } from "@mui/material";
import lightTheme from "./lightTheme";
import componentTheme from "./componentTheme";
import typography from "./typography";

const typeTheme = [lightTheme];

const themes = (type: number) =>
  createTheme({
    ...typeTheme[type],
    components: { ...componentTheme },
    typography: {
      ...typography,

    },
    breakpoints: {
      values: {
        xs: 0,    // 0 - 599
        sm: 600,  // 601 - 899 
        md: 900,  // 900 - 1199
        lg: 1200, // 1200 - 1536
        xl: 1536, // 1536+
      },
    },
  });

export default themes;
