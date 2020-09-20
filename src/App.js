import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Theme } from "./Theme";
import { DocumentViewer } from "./DocumentViewer";
import { ArtboardViewer } from "./ArtboardViewer";
import { FETCH_DOCUMENTS_QUERY } from "./fetchDocumentsQuery";

const GRAPHQL_URI = "https://graphql.sketch.cloud/api";

const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
});

const Loading = () => <div>loading...</div>;

const AppWrapper = styled.div``;

const SketchViewer = () => {
  const location = useLocation();
  const documentId = location.pathname.split("/")[1];
  const { data, loading, error } = useQuery(FETCH_DOCUMENTS_QUERY, {
    variables: { documentId },
  });

  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const {
    share: {
      version: {
        document: {
          name: documentName,
          artboards: { entries },
        },
      },
    },
  } = data;

  return (
    <AppWrapper>
      <Switch>
        <Route
          exact
          path="/:documentId"
          children={<DocumentViewer name={documentName} artboards={entries} />}
        />
        <Route
          path="/:documentId/artboard/:artboardId"
          children={<ArtboardViewer artboards={entries} />}
        />
      </Switch>
    </AppWrapper>
  );
};

const App = () => {
  return (
    <Router>
      <Theme>
        <ApolloProvider client={client}>
          <SketchViewer />
        </ApolloProvider>
      </Theme>
    </Router>
  );
};

export default App;
export { client };
