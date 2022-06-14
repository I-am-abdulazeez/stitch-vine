import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Badge, Provider as PaperProvider } from "react-native-paper";
import Main from "./src/Main";

export default function App() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
}
