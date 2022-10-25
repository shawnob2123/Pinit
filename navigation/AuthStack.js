import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../src/screens/Root/SplashScreen";
// import OnboardScreen from "../src/screens/Root/OnboardScreen";
import SignUpScreen from "../src/screens/Root/SignUpScreen";
import SignInScreen from "../src/screens/Root/SignInScreen";

const Stack = createNativeStackNavigator();

export const AuthStack = () => { 
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      {/* <Stack.Screen name="Onboard" component={OnboardScreen} /> */}
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}