import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import {
  configureFonts,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import { Theme } from "react-native-paper/lib/typescript/types";

export const navigationTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: "transparent",
  },
};

export const paperTheme: Theme = {
  ...PaperDefaultTheme,
  roundness: 2,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: "#781596",
  },
};
