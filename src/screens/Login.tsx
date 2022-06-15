import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Headline, TextInput } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParams } from "../../types";
import { useNavigation } from "@react-navigation/native";

const LoginScreen: React.FC = () => {
  const [text, setText] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(true);

  const navigation = useNavigation<StackNavigationProp<StackParams>>();

  return (
    <>
      <StatusBar backgroundColor="transparent" animated />
      <View style={{ marginTop: RNStatusBar.currentHeight! + 10, padding: 30 }}>
        <View style={{ justifyContent: "center" }}>
          <Image
            resizeMode="contain"
            style={{ width: 180, height: 180, alignSelf: "center" }}
            source={require("../../assets/images/logo-dark.png")}
          />
        </View>
        <Headline
          style={{
            marginTop: -40,
            fontSize: 25,
            textAlign: "center",
            fontFamily: "Inter_700Bold",
          }}
        >
          Welcome Back!
        </Headline>

        <View style={{ marginTop: 50 }}>
          <TextInput
            label="Email Address"
            value={text}
            mode="outlined"
            theme={{
              roundness: 8,
              colors: {
                background: "#ffffff",
              },
            }}
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            label="Password"
            secureTextEntry={passwordVisible}
            style={{ marginTop: 30, fontFamily: "Inter_400Regular" }}
            mode="outlined"
            theme={{
              roundness: 8,
              colors: {
                background: "#ffffff",
              },
            }}
            right={
              <TextInput.Icon
                name={passwordVisible ? "eye-off" : "eye"}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            }
          />
          <Text
            style={{
              textDecorationLine: "underline",
              color: "#781596",
              marginVertical: 30,
              fontSize: 16,
              fontFamily: "Inter_600SemiBold",
              fontWeight: "600",
            }}
            onPress={() => console.log("Stuff")}
          >
            Forgot password
          </Text>
          <Button
            uppercase={false}
            mode="contained"
            theme={{
              roundness: 10,
            }}
            labelStyle={{ fontSize: 18, fontFamily: "Inter_600SemiBold" }}
            contentStyle={{ height: 55 }}
            onPress={() => console.log("Stuff")}
          >
            Login
          </Button>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          style={{
            marginTop: "40%",
            justifyContent: "center",
            paddingHorizontal: 15,
          }}
        >
          <Text
            style={{
              color: "#8D8B8B",
              fontFamily: "Inter_400Regular",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            or Continue using
          </Text>
          <Image
            source={require("../../assets/images/google-logo.png")}
            resizeMode="contain"
            style={{
              width: 20,
              alignSelf: "center",
              height: 20,
              marginVertical: 10,
            }}
          />
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              color: "#8D8B8B",
              textAlign: "center",
            }}
          >
            Don't have an account?{" "}
            <Text
              onPress={() => navigation.navigate("NewCustomer")}
              style={{
                fontFamily: "Inter_600SemiBold",
                color: "#781596",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Signup
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;
