import React, { useState } from "react";
import { Text, View, SafeAreaView, StatusBar } from "react-native";
import { ApolloProvider } from "@apollo/react-hooks";
import { AppLoading } from "expo";
import ScrollableTabView from "react-native-scrollable-tab-view";
import PlantList from "../plantList/plantList";
import PlantCreate from "../createPlant/createPlant";
import { fontLoader } from "../../utilities/fontLoader";
import { apolloClient } from "../../utilities/apolloClient";
import styles from "./main.style";

export default function Main() {
  const [fontLoaded, setFontLoaded] = useState(false);

  // Preload fonts into application
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fontLoader}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="default" />
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Muck Moisture Tracker</Text>
        </View>
        <ScrollableTabView locked={true}>
          <PlantList tabLabel="View" />
          <PlantCreate tabLabel="Create" />
        </ScrollableTabView>
      </SafeAreaView>
    </ApolloProvider>
  );
}
