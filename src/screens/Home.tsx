import { BlurView } from "@react-native-community/blur";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, StatusBar, ImageBackground } from "react-native";

import { Button, Headline, Title } from "react-native-paper";
import { StackParams } from "../../types";

import { styles } from "../styles";

const imageSrc = require("../../assets/images/landing-bg.jpg");

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<StackParams>>();
  return (
    <>
      <StatusBar translucent backgroundColor={"transparent"} />
      <ImageBackground
        resizeMode="cover"
        style={styles.imageStyle}
        source={imageSrc}
      >
        <View style={styles.panel}>
          <Headline style={styles.lgText}>Join the best</Headline>
          <Headline style={styles.lgTextTwo}>tailoring app</Headline>
          <View style={{ marginVertical: 30 }}>
            <Title style={styles.secText}>
              Take your tailoring to the next level
            </Title>
            <Title
              style={{
                color: "white",
                textAlign: "center",
                fontFamily: "Inter_500Medium",
                marginTop: -3,
                fontSize: 18,
              }}
            >
              with Stitch Vine
            </Title>
          </View>
          <View style={{ paddingHorizontal: 30 }}>
            <Button
              onPress={() => navigation.navigate("Login")}
              uppercase={false}
              theme={{
                roundness: 10,
              }}
              labelStyle={{ fontSize: 18, fontFamily: "Inter_600SemiBold" }}
              contentStyle={{ height: 55 }}
              mode="contained"
              compact
            >
              Get Started
            </Button>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default HomeScreen;
