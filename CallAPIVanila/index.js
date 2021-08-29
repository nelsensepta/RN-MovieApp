import React, { useEffect, useState } from "react";

import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

const CallAPIVanilla = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity")
      .then((response) => response.json())
      .then((json) => setData(json.top))
      .catch((error) => alert(error));
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.containerCard}>
        <View style={styles.card}>
          <Image style={styles.avatar} source={{ uri: item.image_url }} />
          <View style={styles.textTitle}>
            <Text style={styles.title}>Title : {item.title}</Text>
            <Text style={styles.type}>Type : {item.type}</Text>
            <Text>Start Date : {item.start_date}</Text>
            <TouchableOpacity
              title="Readme"
              onPress={() => {
                Linking.openURL(item.url);
              }}
            >
              <Text style={styles.Read}>Read Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.mal_id}
      />
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  // card Api
  container: {
    backgroundColor: "#f4eeff",
    flex: 1,
  },
  containerCard: {
    // flex: 1,
    margin: 9,
    justifyContent: "center",
  },

  card: {
    backgroundColor: "#FFf",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: 19,
    shadowOpacity: 0.5,
    shadowRadius: 16.0,
    overflow: "hidden",
    flexDirection: "row",
    padding: 10,
  },
  avatar: {
    resizeMode: "cover",
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  textTitle: {
    flex: 1,
    marginHorizontal: 10,
    alignSelf: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  Read: {
    backgroundColor: "#424874",
    borderRadius: 8,
    marginTop: 5,
    width: 100,
    textAlign: "center",
    fontSize: 16,
    padding: 2,
  },
});
