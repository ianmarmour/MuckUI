import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { AppLoading } from "expo";
import {
  responsiveFontSize
} from "react-native-responsive-dimensions";
import ScrollableTabView from "react-native-scrollable-tab-view";
import Plant from "./components/plant/plant";
import PlantCreate from "./components/createPlant/createPlant";
import { fontLoader } from "./utilities/fontLoader";
const httpLink = new HttpLink({
  uri: "http://192.168.1.157:4000/graphql"
});
const cache = new InMemoryCache();
const client: any = new ApolloClient({ link: httpLink, cache: cache });

export default function Main() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fontLoader}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="default" />
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Muck Moisture Tracker</Text>
        </View>
        <ScrollableTabView locked={true}>
          <Plant tabLabel="View" />
          <PlantCreate tabLabel="Create" />
        </ScrollableTabView>
      </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D3EEDD"
  },
  logo: {
    width: 66,
    height: 58
  },
  header: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: responsiveFontSize(6),
    fontFamily: "BebasNeue",
    backgroundColor: "#D3EEDD"
  },
  headerContainer: {
    borderColor: "lightgrey"
  },
  topBorder: {
    backgroundColor: "#D3EEDD"
  }
});
