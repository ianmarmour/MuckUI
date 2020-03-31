import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Button } from "react-native-elements";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const GET_PLANTS = gql`
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

const CREATE_PLANT = gql`
  mutation CreatePlant($name: String, $soil: createSoilInput) {
    createPlant(plant: { name: $name, soil: $soil }) {
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

const returnUpdatedPlant = (
  plantState,
  id,
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
    plantStateCopy.soil._id = soilid;
  }
  if (moistureLevel) {
    plantStateCopy.soil.moistureLevel = moistureLevel;
  }

  return plantStateCopy;
};

export default function PlantCreate() {
  const [plantInfo, setPlantInfo] = useState({
    name: "",
    soil: {
      _id: "",
      brand: "",
      moistureLevel: ""
    }
  });

  const [createPlant] = useMutation(CREATE_PLANT, {
    update(cache, { data: { createPlant } }) {
      const { plants } = cache.readQuery({ query: GET_PLANTS });
      cache.writeQuery({
        query: GET_PLANTS,
        data: { plants: plants.concat([createPlant]) }
      });
    }
  });

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.forumTitle}>Plant</Text>
      <TextInput
        placeholder="Name"
        style={styles.inputStyle}
        onChangeText={text => {
          setPlantInfo(returnUpdatedPlant(plantInfo, "", text, "", "", ""));
        }}
      />
      <Text style={styles.forumTitle}>Soil</Text>
      <TextInput
        onChangeText={text => {
          setPlantInfo(returnUpdatedPlant(plantInfo, "", "", "", text, ""));
        }}
        placeholder="ID"
        style={styles.inputStyle}
      />
      <TextInput
        onChangeText={text => {
          setPlantInfo(returnUpdatedPlant(plantInfo, "", "", text, "", ""));
        }}
        placeholder="Brand"
        style={styles.inputStyle}
      />
      <TextInput
        onChangeText={text => {
          setPlantInfo(
            returnUpdatedPlant(plantInfo, "", "", "", "", parseInt(text))
          );
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
            console.log(plantInfo);

            const foo: any = await createPlant({
              variables: {
                id: plantInfo.id,
                name: plantInfo.name,
                soil: plantInfo.soil
              }
            });

            console.log(foo);
          } catch (e) {
            console.log(e);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    width: responsiveWidth(100),
    alignItems: "center",
    backgroundColor: "white"
  },
  forumTitle: {
    fontSize: responsiveFontSize(3),
    fontFamily: "BebasNeue",
    color: "#282a2c",
    paddingTop: 15
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "lightgrey"
  },
  buttonStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "lightgrey"
  }
});
