import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

type Props = {};

const DUMMY_DATA = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://source.unsplash.com/random?car",
    screen: "MapScreen",
  },
  {
    id: "2",
    title: "Order food",
    image: "https://source.unsplash.com/random?food",
    screen: "EatScreen",
  },
];

const NavOptions = (props: Props) => {
  return (
    <View>
      <FlatList
        data={DUMMY_DATA}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.navOptionButton}>
            <View>
              <Image
                source={{ uri: item.image }}
                style={{ width: 120, height: 120, resizeMode: "contain" }}
              ></Image>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.icon}>
                <AntDesign name="arrowright" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  navOptionButton: {
    paddingLeft: 24,
    padding: 8,
    paddingBottom: 32,
    paddingTop: 16,
    backgroundColor: "#A2ABB5",
    margin: 8,
    width: 160,
  },
  title: {
    marginTop: 8,
    // fontWeight: "semibold",
    fontSize: 18,
  },
  icon: {
    padding: 8,
    backgroundColor: "#000",
    borderRadius: 1000,
  },
});
