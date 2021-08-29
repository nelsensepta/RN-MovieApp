import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons, FontAwesome } from "react-native-vector-icons";
import Details from "../CallAPIVanila/Details";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import CallAPIVanilla from "../CallAPIVanila";
import Window from "../assets/window/Window";

const Tab = createMaterialBottomTabNavigator();

const NavBottom = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffF"
      barStyle={styles.botStyle}
      labelStyle={{ fontSize: 12 }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-box"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MovieAPI"
        component={CallAPIVanilla}
        options={{
          tabBarLabel: "MovieAPI",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="movie-outline"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={CallAPIVanilla}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavBottom;

const styles = StyleSheet.create({
  botStyle: {
    backgroundColor: "grey",
  },
});
