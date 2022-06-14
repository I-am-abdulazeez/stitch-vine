import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { DefaultTheme as PaperDefaultTheme } from "react-native-paper";

export const navigationTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: "transparent",
  },
};

export const paperTheme = {
  ...PaperDefaultTheme,
  roundness: 2,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: "#781596",
  },
};
