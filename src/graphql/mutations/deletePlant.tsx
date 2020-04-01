import gql from "graphql-tag";

const deletePlant = gql`
  mutation DeletePlant($id: ID!) {
    deletePlant(plant: { id: $id })
  }
`;

export { deletePlant };
