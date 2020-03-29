import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Plant from "./components/plant/plant";
import { ApolloClient } from 'apollo-client';
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from '@apollo/react-hooks';
import * as Font from 'expo-font';

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql"
});

const cache = new InMemoryCache()

const client: any = new ApolloClient({link: httpLink, cache: cache});

const App = () => {
  Font.loadAsync({
    'BebasNeue': require('./assets/fonts/BebasNeue-Regular.ttf'),
  });

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}><Text style={styles.header}>Muck Moisture Tracker</Text>
      <Plant />
      </View>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 66,
    height: 58,
  },
  header: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 50,
    fontFamily: "BebasNeue",
    backgroundColor: "#D3EEDD",
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
  }
});

export default App