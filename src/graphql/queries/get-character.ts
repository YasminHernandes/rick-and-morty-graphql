import { gql } from "@apollo/client"
import { FullLocation } from './../fragments/location';

export const GET_CHARACTER = gql `
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        ...FullLocation
      }
      location {
        ...FullLocation
      }
      image
    }
  }

  ${FullLocation}
`