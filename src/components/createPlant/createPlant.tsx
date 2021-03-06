import React, { useReducer } from "react";
import { Text, View, TextInput } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import { Button } from "react-native-elements";
import { createPlant } from "../../graphql/mutations/createPlant";
import { getPlants } from "../../graphql/queries/getPlants";
import styles from "./createPlant.style";

const plantReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PLANT": {
      let stateCopy = { ...state };
      stateCopy[action.property] = action.propertyValue;
      return stateCopy;
    }
    case "UPDATE_SOIL": {
      let stateCopy = { ...state };
      stateCopy.soil[action.property] = action.propertyValue;
      return stateCopy;
    }
    default: {
      throw new Error();
    }
  }
};

const CreatePlant = () => {
  const [plantState, updatePlantState] = useReducer(plantReducer, {
    soil: {}
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
        onChangeText={textInput => {
          updatePlantState({
            type: "UPDATE_PLANT",
            property: "name",
            propertyValue: textInput
          });
        }}
      />
      <Text style={styles.forumTitle}>Soil</Text>
      <TextInput
        onChangeText={textInput => {
          updatePlantState({
            type: "UPDATE_SOIL",
            property: "id",
            propertyValue: textInput
          });
        }}
        placeholder="ID"
        style={styles.inputStyle}
      />
      <TextInput
        onChangeText={textInput => {
          updatePlantState({
            type: "UPDATE_SOIL",
            property: "brand",
            propertyValue: textInput
          });
        }}
        placeholder="Brand"
        style={styles.inputStyle}
      />
      <TextInput
        onChangeText={textInput => {
          updatePlantState({
            type: "UPDATE_SOIL",
            property: "moistureLevel",
            propertyValue: parseInt(textInput)
          });
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
            await createPlantMutation({
              variables: {
                name: plantState.name,
                soil: plantState.soil
              }
            });
          } catch (e) {
            console.log(e);
          }
        }}
      />
    </View>
  );
};

export default CreatePlant;
