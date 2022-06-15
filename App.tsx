import { Provider as PaperProvider } from "react-native-paper";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

// Fonts
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { paperTheme } from "./assets/theme";

import Main from "./src/Main";

import { useEffect } from "react";

const App = () => {
  const useFonts = async () =>
    await Font.loadAsync({
      Inter_300Light,
      Inter_400Regular,
      Inter_500Medium,
      Inter_600SemiBold,
      Inter_700Bold,
    });

  const fetchFonts = async () => {
    await useFonts();
  };

  useEffect(() => {
    fetchFonts();
  });

  if (!fetchFonts) {
    <AppLoading />;
  }

  return (
    <PaperProvider theme={paperTheme}>
      <Main />
    </PaperProvider>
  );
};

export default App;
