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
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

export default themes;
