import React from "react";
import { render, wait } from "@testing-library/react";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import { Theme } from "../../Theme";
import { ArtboardViewer } from "../ArtboardViewer";
import mockData from "../__mocks__/mockData";

const MOCK_DOCUMENT_ID = "Y8wDM";
const MOCK_ARTBOARD_ID = "Etch%20a%20Sketch";

const renderComponent = (data = mockData) =>
  render(
    <Theme>
      <MemoryRouter
        initialEntries={[`/${MOCK_DOCUMENT_ID}/artboard/${MOCK_ARTBOARD_ID}`]}
      >
        <Switch>
          <Route
            path="/:id"
            render={() => <ArtboardViewer artboards={data} />}
          />
        </Switch>
      </MemoryRouter>
    </Theme>
  );

describe("ArtboardViewer", () => {
  it("should render all the artboards that receive from props", () => {
    const { getByText, getByAltText } = renderComponent();

    wait(() => {
      expect(getByText(/Xerox alto/)).toBeInTheDocument();
      expect(getByAltText(/Xerox alto artboard thumbnail/)).toBeInTheDocument();
      expect(getByText(/Xerox RedHat 8/)).toBeInTheDocument();
      expect(
        getByAltText(/Xerox RedHat 8 artboard thumbnail/)
      ).toBeInTheDocument();
      expect(getByText(/AmigaOS/)).toBeInTheDocument();
      expect(getByAltText(/AmigaOS artboard thumbnail/)).toBeInTheDocument();
    });
  });
});
