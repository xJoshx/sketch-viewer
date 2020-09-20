import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, wait } from "@testing-library/react";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import { Theme } from "../../Theme";
import { ArtboardViewer } from "../ArtboardViewer";
import mockData from "../__mocks__/mockData";

const MOCK_DOCUMENT_ID = "Y8wDM";
const MOCK_ARTBOARD_ID = "Lisa";

const renderComponent = (data = mockData) =>
  render(
    <Theme>
      <MemoryRouter
        initialEntries={[`/${MOCK_DOCUMENT_ID}/artboard/${MOCK_ARTBOARD_ID}`]}
        initialIndex={0}
      >
        <Switch>
          <Route
            path={`/:documentId/artboard/:artboardId`}
            render={() => <ArtboardViewer artboards={data} />}
          />
        </Switch>
      </MemoryRouter>
    </Theme>
  );

describe("ArtboardViewer", () => {
  it("should render the artboard with the name", async () => {
    const { getByText, getByAltText } = renderComponent();

    await wait(() => {
      expect(getByText(/Lisa/)).toBeInTheDocument();
      expect(getByAltText(/Lisa artboard/)).toBeInTheDocument();
      expect(getByText(/3/)).toBeInTheDocument();
      expect(getByText(/\//)).toBeInTheDocument();
      expect(getByText(/4/)).toBeInTheDocument();
      expect(getByAltText(/left arrow icon/)).toBeInTheDocument();
      expect(getByAltText(/right arrow icon/)).toBeInTheDocument();
      expect(getByAltText(/close icon/)).toBeInTheDocument();
    });
  });
});
