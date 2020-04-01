import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import { Button } from "react-native-elements";
import { createPlant } from "../../graphql/mutations/createPlant";
import { getPlants } from "../../graphql/queries/getPlants";
import styles from "./createPlant.style";

const returnUpdatedPlant = (
  plantState,
  name,
  soilBrand,
  soilid,
  moistureLevel
) => {
  let plantStateCopy = { ...plantState };

  if (name) {
    plantStateCopy.name = name;
  }
  if (soilBrand) {
    plantStateCopy.soil.brand = soilBrand;
  }
  if (soilid) {
    plantStateCopy.soil.id = soilid;
  }
  if (moistureLevel) {
    plantStateCopy.soil.moistureLevel = moistureLevel;
  }

  return plantStateCopy;
};

const PlantCreate = () => {
  const [plantInfo, setPlantInfo] = useState({
    name: "",
    soil: {
      id: "",
      brand: "",
      moistureLevel: ""
    }
  });

  const [createPlantMutation] = useMutation(createPlant, {
    refetchQueries: [{ query: getPlants }]
  });

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.forumTitle}>Plant</Text>
      <TextInput
        placeholder="Name"
        style={styles.inputStyle}
        onChangeText={text => {
          setPlantInfo(returnUpdatedPlant(plantInfo, text, "", "", ""));
        }}
      />
      <Text style={styles.forumTitle}>Soil</Text>
      <TextInput
        onChangeText={text => {
          setPlantInfo(returnUpdatedPlant(plantInfo, "", "", text, ""));
        }}
        placeholder="ID"
        style={styles.inputStyle}
      />
      <TextInput
        onChangeText={text => {
          setPlantInfo(returnUpdatedPlant(plantInfo, "", text, "", ""));
        }}
        placeholder="Brand"
        style={styles.inputStyle}
      />
      <TextInput
        onChangeText={text => {
          setPlantInfo(returnUpdatedPlant(plantInfo, "", "", "", text));
        }}
        placeholder="Moisture"
        style={styles.inputStyle}
      />
      <Button
        buttonStyle={styles.buttonStyle}
        title="Create Plant"
        onPress={async e => {
          e.preventDefault();

          try {
            const createPlantResponse: any = await createPlantMutation({
              variables: {
                name: plantInfo.name,
                soil: plantInfo.soil
              }
            });

            console.log(createPlantResponse);
          } catch (e) {
            console.log(e);
          }
        }}
      />
    </View>
  );
};

export default PlantCreate;
