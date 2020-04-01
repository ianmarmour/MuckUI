import gql from "graphql-tag";

const createPlant = gql`
  mutation CreatePlant($name: String, $soil: createSoilInput) {
    createPlant(plant: { name: $name, soil: $soil }) {
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

export { createPlant };
