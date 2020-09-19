import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Theme } from "./Theme";
import { DocumentViewer } from "./DocumentViewer";
import { ArtboardViewer } from "./ArtboardViewer";

const AppWrapper = styled.div``;

const App = () => {
  return (
    <Theme>
      <AppWrapper>
        <Router>
          <Switch>
            <Route exact path="/" children={<DocumentViewer />} />
            <Route path="/artboard/:id" children={<ArtboardViewer />} />
          </Switch>
        </Router>
      </AppWrapper>
    </Theme>
  );
};

export default App;
