import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, StatusBar as RNStatusBar } from "react-native";
import {
  Appbar,
  Button,
  HelperText,
  Text,
  TextInput,
} from "react-native-paper";
import { Tabs, TabScreen } from "react-native-paper-tabs";

import { StackParams } from "../../types";

const NewCustomerScreen = () => {
  const navigation = useNavigation<StackNavigationProp<StackParams>>();
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  return (
    <>
      <StatusBar backgroundColor="#ffffff" animated />
      <Appbar dark={false} style={styles.bottom}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title="New Customer"
          titleStyle={{ fontFamily: "Inter_700Bold", fontSize: 27 }}
        />
      </Appbar>

      <Tabs
        style={{
          backgroundColor: "transparent",
          elevation: 0,
          paddingHorizontal: 20,
        }}
      >
        <TabScreen label="Personal Data">
          <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <TextInput
              label="Full name"
              value={fullName}
              mode="outlined"
              theme={{
                roundness: 8,
                colors: {
                  background: "#ffffff",
                },
              }}
              onChangeText={(fullName) => setFullName(fullName)}
            />
            <HelperText style={{ fontSize: 13 }} visible={true} type="info">
              Assistive text
            </HelperText>
            <TextInput
              label="Select Gender"
              mode="outlined"
              style={{
                marginTop: 20,
              }}
              theme={{
                roundness: 8,
                colors: {
                  background: "#ffffff",
                },
              }}
              onChangeText={(email) => setEmail(email)}
            />

            <TextInput
              label="Email Address"
              value={email}
              mode="outlined"
              style={{
                marginVertical: 20,
              }}
              theme={{
                roundness: 8,
                colors: {
                  background: "#ffffff",
                },
              }}
              onChangeText={(email) => setEmail(email)}
            />
            <TextInput
              label="Phone Number"
              value={phoneNumber}
              mode="outlined"
              theme={{
                roundness: 8,
                colors: {
                  background: "#ffffff",
                },
              }}
              onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
            />
            <Button
              uppercase={false}
              mode="contained"
              style={{ marginTop: 30 }}
              theme={{
                roundness: 10,
              }}
              labelStyle={{ fontSize: 18, fontFamily: "Inter_600SemiBold" }}
              contentStyle={{ height: 55 }}
              onPress={() => console.log("Stuff")}
            >
              Next
            </Button>
          </View>
        </TabScreen>
        <TabScreen label="Measurement Info">
          <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <Text>Measurement Info</Text>
          </View>
        </TabScreen>
      </Tabs>
    </>
  );
};

export default NewCustomerScreen;

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "#ffffff",
    marginTop: RNStatusBar.currentHeight! + 10,
    elevation: 0,
  },
});
