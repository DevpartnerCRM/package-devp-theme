import React from "react";
import { Theme } from "@emotion/react";
import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material/styles";
import { typography } from "../../typography";
import lightModePalette from "../../palette";
import { components } from "../../component";

// const defaultTheme = createTheme({
//   palette: lightModePalette,
//   components: components,
//   typography
// });

interface Props {
  children: React.ReactNode;
  theme?: Theme;
  themeProps?: object[];
  direction?: "ltr" | "rtl";
  updateDependencies?: any[];
}

const ConvertUpLeadsTheme: React.FC<Props> = ({
  children,
  theme,
  direction = "ltr",
  updateDependencies = [],
  themeProps,
}) => {
  const useTheme = React.useMemo(
    () =>
      createTheme({
        palette: lightModePalette,
        components: components,
        typography,
        direction: direction,
        ...themeProps,
      }),
    [direction, ...updateDependencies]
  );
  return <ThemeProvider theme={theme ? theme : useTheme}>{children}</ThemeProvider>;
};

export default ConvertUpLeadsTheme;
