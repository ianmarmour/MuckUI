import React from "react";
import { StyleSheet, Text, View, Image, Fragment, ScrollView } from "react-native";
import { useQuery } from '@apollo/react-hooks';
import gql from  'graphql-tag';  
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

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

  return (<ScrollView style={styles.verticalScrollContainer} showsVerticalScrollIndicator={false}>
    {loading ? (<Text>Loading...</Text>) : (
        data.plants.map(plant => {
          return (
            <View style={styles.plantContainer}>
              <View style ={styles.plantHeader}>
                <Image style={styles.logo} source={require("../../assets/plant.png")} />
              </View>
              <View style={styles.textContainer}>
                <View style ={styles.plantDetails}>
                  <View style={styles.keyView}>
                    <Text style={styles.plantKey}>Name:</Text>
                  </View>
                  <Text style={styles.plantValue}>{plant.name}</Text>
                </View>
                <View style ={styles.plantDetails}>
                  <View style={styles.keyView}>
                    <Text style={styles.plantKey}>Soil Moisture:</Text>
                  </View>
                  <Text style={styles.plantValue}>{plant.soil.moistureLevel}</Text>
                </View>
                <View style ={styles.plantDetails}>
                  <View style={styles.keyView}>
                    <Text style={styles.plantKey}>Soil Brand:</Text>
                  </View>
                  <Text style={styles.plantValue}>{plant.soil.brand}</Text>
                </View>
              </View>
            </View>
          )
        }))}
          
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  verticalScrollContainer: {
    backgroundColor: "white",
  },
  plantContainer: {
    flexDirection: 'row',
    alignItems: "center",
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
    backgroundColor: "white",
    width: responsiveWidth(100),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    paddingLeft: responsiveHeight(1),
    paddingRight: responsiveHeight(1),
  },
  plantHeader: {
    alignItems: "center",
    borderColor: 'lightgrey',
    borderWidth: 3,
    height: 130,
    width: 130,
    overflow: 'hidden',
  },
  plantDetails: {
    alignItems: "center",
    marginHorizontal: "auto",
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft: responsiveWidth(10),
    flexDirection: 'column',
  },
  keyView: {
    alignItems: "center",
    marginHorizontal: "auto",
  },
  plantKey: {
    alignSelf: "flex-start",
    fontWeight: 'bold',
  },
  plantValue: {
    fontWeight: 'normal',
    paddingVertical: responsiveHeight(.8)
  },
  logo: {
    width: 130,
    height: 130
  },
  header: {
    fontSize: 50,
    fontFamily: "BebasNeue-Bold",
    color: "#282a2c"
  }
});
