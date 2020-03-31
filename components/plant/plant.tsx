import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import Swiper from "react-native-swiper";
import SwipeableViews from "react-swipeable-views-native";

const FETCH_ALL_PLANTS = gql`
  query {
    plants {
      id
      name
      soil {
        _id
        moistureLevel
        brand
      }
    }
  }
`;

const DELETE_PLANTS = gql`
  mutation DeletePlants($id: ID!) {
    deletePlant(plant: { id: $id })
  }
`;

export default function Plant() {
  const [deletePlantT] = useMutation(DELETE_PLANTS);
  const { client, loading, data } = useQuery<any, any>(FETCH_ALL_PLANTS);

  return (
    <ScrollView
      style={styles.verticalScrollContainer}
      showsVerticalScrollIndicator={false}
    >
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        data.plants.map(plant => {
          return (
            <SwipeableViews style={styles.swipeableContainer}>
              <View style={styles.plantContainer}>
                <View style={styles.plantHeader}>
                  <Image
                    style={styles.logo}
                    source={require("../../assets/plant.png")}
                  />
                </View>
                <View style={styles.textContainer}>
                  <View style={styles.plantDetails}>
                    <View style={styles.keyView}>
                      <Text style={styles.plantKey}>Name:</Text>
                    </View>
                    <Text style={styles.plantValue}>{plant.name}</Text>
                  </View>
                  <View style={styles.plantDetails}>
                    <View style={styles.keyView}>
                      <Text style={styles.plantKey}>Soil Moisture:</Text>
                    </View>
                    <Text style={styles.plantValue}>
                      {plant.soil.moistureLevel}
                    </Text>
                  </View>
                  <View style={styles.plantDetails}>
                    <View style={styles.keyView}>
                      <Text style={styles.plantKey}>Soil Brand:</Text>
                    </View>
                    <Text style={styles.plantValue}>{plant.soil.brand}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={async () => {
                  try {
                    const { foo }: any = await deletePlantT({
                      variables: { id: plant.id }
                    });
                    console.log(foo);
                    client.resetStore();
                  } catch (e) {
                    console.log(e);
                  }
                }}
              >
                <View style={styles.deleteButton}>
                  <Text> Delete </Text>
                </View>
              </TouchableOpacity>
            </SwipeableViews>
          );
        })
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  verticalScrollContainer: {
    width: responsiveWidth(100),
    backgroundColor: "white"
  },
  swipeableContainer: {
    width: responsiveWidth(100)
  },
  deleteButton: {
    backgroundColor: "red",
    width: responsiveWidth(100),
    height: 130
  },
  plantContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "lightgrey",
    borderBottomWidth: 1,
    backgroundColor: "white",
    width: responsiveWidth(100),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    paddingLeft: responsiveHeight(1),
    paddingRight: responsiveHeight(1)
  },
  plantHeader: {
    alignItems: "center",
    borderColor: "lightgrey",
    borderWidth: 3,
    height: 130,
    width: 130,
    overflow: "hidden"
  },
  plantDetails: {
    alignItems: "center",
    marginHorizontal: "auto",
    flexDirection: "row"
  },
  textContainer: {
    marginLeft: responsiveWidth(10),
    flexDirection: "column"
  },
  keyView: {
    alignItems: "center",
    marginHorizontal: "auto"
  },
  plantKey: {
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  plantValue: {
    fontWeight: "normal",
    paddingVertical: responsiveHeight(0.8)
  },
  logo: {
    width: 130,
    height: 130
  },
  header: {
    fontSize: responsiveFontSize(2),
    fontFamily: "BebasNeue-Bold",
    color: "#282a2c"
  },
  slideContainer: {
    height: 100
  },
  slide: {
    padding: 15,
    height: 100
  },
  slide1: {
    backgroundColor: "#FEA900"
  },
  slide2: {
    backgroundColor: "#B3DC4A"
  },
  slide3: {
    backgroundColor: "#6AC0FF"
  },
  text: {
    color: "#fff",
    fontSize: 16
  }
});
