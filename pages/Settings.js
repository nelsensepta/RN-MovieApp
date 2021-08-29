import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

const DATA = [
  {
    key: "1",
  },
  {
    key: "2",
  },
  {
    key: "3",
  },
  {
    key: "4",
  },
  {
    key: "5",
  },
  {
    key: "6",
  },
  {
    key: "7",
  },
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.cardItem}>
      <Text style={styles.textItem}>{item.key}</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardItem: {
    alignItems: "center",
    height: 100,
    margin: 10,
    backgroundColor: "#52057b",
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: 19,
    shadowOpacity: 0.5,
    shadowRadius: 16.0,
  },

  textItem: {
    lineHeight: 100,
  },
});
