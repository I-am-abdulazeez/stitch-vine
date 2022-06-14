import { View, Text, StyleSheet } from "react-native";
import { Badge } from "react-native-paper";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Badge>4</Badge>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
