import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              style={styles.img}
              source={require("../assets/LogoUmp.png")}
            />
            <View style={styles.text}>
              <Text style={styles.title}>Nama : Nelsen Septa Henidar</Text>
              <Text style={styles.title}>NIM : 2003040125</Text>
              <Text style={styles.title}>Prodi : Teknik Informatika</Text>
            </View>
            <Text style={styles.univ}>Universitas Muhammadiyah Purwokerto</Text>
          </View>

          <Button
            title="Go to Window"
            onPress={() => navigation.navigate("Window")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {},

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
    padding: 10,
    margin: 10,
    overflow: "hidden",
    alignItems: "center",
  },

  img: {
    height: 200,
    width: 200,
  },

  text: {
    margin: 10,
  },
  title: { fontSize: 20 },
  univ: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
