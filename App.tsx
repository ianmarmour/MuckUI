import React, { useState } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar } from "react-native";
import Plant from "./components/plant/plant";
import { ApolloClient } from 'apollo-client';
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from '@apollo/react-hooks';
import * as Font from 'expo-font';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { AppLoading } from "expo";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql"
});

const cache = new InMemoryCache()

const client: any = new ApolloClient({link: httpLink, cache: cache});

const fetchFonts = () => {
  return Font.loadAsync({
    'BebasNeue': require('./assets/fonts/BebasNeue-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return ( 
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
    />
    );
  }

  return (
    <ApolloProvider client={client}>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="default"/>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Muck Moisture Tracker</Text>
          </View>
        <Plant />
        </SafeAreaView>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#D3EEDD"
  },
  logo: {
    width: 66,
    height: 58,
  },
  header: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: responsiveFontSize(6),
    fontFamily: "BebasNeue",
    backgroundColor: "#D3EEDD",
  },
  headerContainer: {
    borderColor: 'lightgrey',
    borderBottomWidth: responsiveHeight(.25),
  },
  topBorder: {
    backgroundColor: "#D3EEDD",
  }
});