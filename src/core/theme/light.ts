import { createTheme } from "@mui/material";
import colors from "core/constants/color";
import baseTheme from "core/theme/base";

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    mode: "light",
    background: {
      paper: colors.white,
      default: colors.white,
    },
  },
});

export default lightTheme;
