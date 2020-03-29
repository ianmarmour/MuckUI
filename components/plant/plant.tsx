import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useQuery } from '@apollo/react-hooks';
import gql from  'graphql-tag';  

const FETCH_ALL_PLANTS = gql `query {  
  plants {
    name
    soil {
      moistureLevel
      brand
    }
  }  
}  
`;  

export default function Plant() {
  const { loading, data } = useQuery<any, any>(
    FETCH_ALL_PLANTS
  );

  return (
    <View style={styles.contentContainer}>
    {loading ? (
        <p>Loading ...</p>
      ) : (
        data.plants.map(plant => (
          <View style={styles.plantContainer}>
            <View style ={styles.plantHeader}>
              <Image style={styles.logo} source={require("../../assets/plant.png")} />
            </View>
            <View style ={styles.plantDetails}>
              <Text style={styles.plantKey}>Name:</Text>
              <Text style={styles.plantValue}>{plant.name}</Text>
            </View>
            <View style ={styles.plantDetails}>
              <Text style={styles.plantKey}>Soil Moisture:</Text>
              <Text style={styles.plantValue}>{plant.soil.moistureLevel}</Text>
            </View> 
            <View style ={styles.plantDetails}>
              <Text style={styles.plantKey}>Soil Brand:</Text>
              <Text style={styles.plantValue}>{plant.soil.brand}</Text>
            </View> 
          </View>
        )))}
  </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  plantContainer: {
    alignItems: "center",
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
    marginTop: 10
  },
  plantHeader: {
    alignItems: "center"
  },
  plantDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plantKey: {
    fontWeight: 'bold',
    width: 130,
    marginLeft: 10
  },
  plantValue: {
    fontWeight: 'normal'
  },
  logo: {
    width: 66,
    height: 58,
  },
  header: {
    fontSize: 50,
    fontFamily: "BebasNeue-Bold",
    color: "#282a2c"
  }
});
