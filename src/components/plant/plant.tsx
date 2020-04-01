import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./plant.style";

const Plant = props => {
  return (
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
          <Text style={styles.plantValue}>{props.name}</Text>
        </View>
        <View style={styles.plantDetails}>
          <View style={styles.keyView}>
            <Text style={styles.plantKey}>Soil Moisture:</Text>
          </View>
          <Text style={styles.plantValue}>{props.soil.moistureLevel}</Text>
        </View>
        <View style={styles.plantDetails}>
          <View style={styles.keyView}>
            <Text style={styles.plantKey}>Soil Brand:</Text>
          </View>
          <Text style={styles.plantValue}>{props.soil.brand}</Text>
        </View>
      </View>
    </View>
  );
};

export default Plant;
