import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import SwipeableViews from "react-swipeable-views-native";
import styles from "./plant.style";

const FETCH_ALL_PLANTS = gql`
  query {
    plants {
      id
      name
      soil {
        id
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
                    source={require("../../../assets/images/plant.png")}
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
