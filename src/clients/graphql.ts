import { ApolloClient, InMemoryCache } from '@apollo/client'

export const charactersClient = new ApolloClient ({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache({
    resultCaching: false
  })
})