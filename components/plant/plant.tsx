import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Plant() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/plant.png")} />
      <Text>Name: </Text>
      <Text>Moisture Level:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  logo: {
    width: 66,
    height: 58
  },
  header: {
    fontSize: 50,
    fontFamily: "BebasNeue-Bold",
    color: "#282a2c"
  }
});
