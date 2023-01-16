import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={{ uri: "https://source.unsplash.com/random?car" }}
          style={styles.image}
        ></Image>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  subContainer: {
    padding: 5,
  },
  container: {
    height: "100%",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
