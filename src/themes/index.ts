import { createTheme } from "@mui/material";
import lightTheme from "./lightTheme";
import componentTheme from "./componentTheme";

declare module '@mui/material/styles' {
  // interface Palette {
  //   neutral: Palette['primary'];
  // }

  // // allow configuration using `createTheme`
  // interface PaletteOptions {
  //   neutral?: PaletteOptions['primary'];
  // }
  interface CommonColors {
    neutral: string;
    gray: string;
  }
}

const typeTheme = [lightTheme];

const themes = (type: number) =>
  createTheme({
    ...typeTheme[type],
    components: { ...componentTheme },
    typography: {
      allVariants: {
        fontFamily: ["Poppins", "serif"].join(","),
      },
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
