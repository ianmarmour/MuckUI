import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Plant from "./components/plant/plant";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Muck Moisture Tracker</Text>
      <Plant />
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
