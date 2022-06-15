import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";

import { navigationTheme } from "../assets/theme";

import { StackParams } from "../types";
import NewCustomerScreen from "./screens/NewCustomer";

const Stack = createStackNavigator<StackParams>();

const Main = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NewCustomer" component={NewCustomerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
