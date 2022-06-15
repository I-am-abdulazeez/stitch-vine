import { Provider as PaperProvider } from "react-native-paper";

// Fonts
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { loadAsync } from "expo-font";

import { hide, hideAsync, preventAutoHideAsync } from "expo-splash-screen";

import { paperTheme } from "./assets/theme";

import Main from "./src/Main";
import { useEffect, useState } from "react";

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const fetchFonts = async () => {
    await loadAsync({
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
    hideAsync();
    preventAutoHideAsync();
  }
  return (
    <PaperProvider theme={paperTheme}>
      <Main />
    </PaperProvider>
  );
};

export default App;
