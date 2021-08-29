import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import NavBottom from "./NavBottom";
import Window from "../assets/window/Window";

const Stack = createStackNavigator();

const NavStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="septaNime"
          component={NavBottom}
          options={{
            headerTitleAlign: "center",
            headerShown: true,
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen name="Window" component={Window} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavStack;

const styles = StyleSheet.create({});
