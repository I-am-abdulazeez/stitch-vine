import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Badge, Provider as PaperProvider } from "react-native-paper";

import App from "./src/App";

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}
