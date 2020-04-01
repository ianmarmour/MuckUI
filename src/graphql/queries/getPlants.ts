import gql from "graphql-tag";

const getPlants = gql`
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

export { getPlants }