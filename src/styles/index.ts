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
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(80px)",
    width: "90%",
    height: "40%",
    left: "5%",
    right: "5%",
  },
  lgText: {
    fontSize: 35,
    textAlign: "center",
    marginTop: 5,
    color: "white",
    fontWeight: "bold",
  },
});
