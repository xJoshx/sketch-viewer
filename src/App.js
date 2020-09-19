import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Theme } from "./Theme";
import { DocumentViewer } from "./DocumentViewer";
import { ArtboardViewer } from "./ArtboardViewer";

const GRAPHQL_URI = "https://graphql.sketch.cloud/api";

const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
});

const AppWrapper = styled.div``;

const App = () => {
  return (
    <Theme>
      <ApolloProvider client={client}>
        <AppWrapper>
          <Router>
            <Switch>
              <Route exact path="/:documentId" children={<DocumentViewer />} />
              <Route
                path="/:documentId/artboard/:artboardId"
                children={<ArtboardViewer />}
              />
            </Switch>
          </Router>
        </AppWrapper>
      </ApolloProvider>
    </Theme>
  );
};

export default App;
export { client };
