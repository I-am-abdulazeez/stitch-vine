import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageStyle: {
    width: "100%", // applied to Image
    height: "100%",
  },
  panel: {
    position: "absolute",
    padding: 15,
    bottom: 50,
    borderRadius: 9,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    width: "90%",
    height: "45%",
    left: "5%",
    right: "5%",
  },
  lgText: {
    fontSize: 32,
    fontFamily: "Inter_500Medium",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 60,
    color: "white",
  },
  lgTextTwo: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Inter_700Bold",
    marginTop: 2,
    color: "white",
  },
  secText: {
    textAlign: "center",
    fontFamily: "Inter_600SemiBold",
    fontSize: 18,
    color: "white",
  },
});
