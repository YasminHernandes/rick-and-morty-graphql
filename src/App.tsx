import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { charactersClient } from "./clients/graphql";
import { GlobalLayout } from "./layouts";
import { HomePage, CharacterPage } from "./pages";

function App() {
  return (
    <>
      <ApolloProvider client={charactersClient}>
        <BrowserRouter>
          <GlobalLayout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/character/:id">
                <CharacterPage />
              </Route>
            </Switch>
          </GlobalLayout>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
