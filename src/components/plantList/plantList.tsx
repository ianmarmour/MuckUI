import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import Plant from "../plant/plant";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { getPlants } from "../../graphql/queries/getPlants";
import { deletePlant } from "../../graphql/mutations/deletePlant";
import SwipeableViews from "react-swipeable-views-native";
import styles from "./plantList.style";

const PlantList = () => {
  const [deletePlantT] = useMutation(deletePlant, {
    refetchQueries: [{ query: getPlants }]
  });
  const { client, loading, data } = useQuery<any, any>(getPlants);

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
            <SwipeableViews key={plant.id} style={styles.swipeableContainer}>
              <Plant name={plant.name} soil={plant.soil} />
              <TouchableOpacity
                onPress={async () => {
                  try {
                    await deletePlantT({
                      variables: { id: plant.id }
                    });
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
};

export default PlantList;
