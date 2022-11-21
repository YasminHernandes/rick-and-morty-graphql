import { gql } from "@apollo/client"

export const FullLocation = gql `
  fragment FullLocation on Location {
    id
    name
    type
    dimension
  }
`