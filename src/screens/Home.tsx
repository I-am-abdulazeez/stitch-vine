import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Surface</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
