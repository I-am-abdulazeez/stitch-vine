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

import { useEffect, useState } from "react";

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const fetchFonts = async () => {
    await Font.loadAsync({
      Inter_300Light,
      Inter_400Regular,
      Inter_500Medium,
      Inter_600SemiBold,
      Inter_700Bold,
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    fetchFonts();
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <PaperProvider theme={paperTheme}>
      <Main />
    </PaperProvider>
  );
};

export default App;
