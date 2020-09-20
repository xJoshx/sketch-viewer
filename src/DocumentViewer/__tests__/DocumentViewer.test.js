import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, wait } from "@testing-library/react";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import { Theme } from "../../Theme";
import { DocumentViewer } from "../DocumentViewer";
import mockData from "../__mocks__/mockData";

const MOCK_DOCUMENT_ID = "Y8wDM";

const renderComponent = (data = mockData) =>
  render(
    <Theme>
      <MemoryRouter initialEntries={[`/${MOCK_DOCUMENT_ID}`]} initialIndex={0}>
        <Switch>
          <Route
            path={`/:documentId`}
            render={() => (
              <DocumentViewer documentName="Test document" artboards={data} />
            )}
          />
        </Switch>
      </MemoryRouter>
    </Theme>
  );

describe("Document Viewer", () => {
  it("should render the document with the name and the header", async () => {
    const { getByText, getByAltText } = renderComponent();

    await wait(() => {
      expect(getByText(/Test document/)).toBeInTheDocument();
      expect(getByText(/Windows Vista/)).toBeInTheDocument();
      expect(getByText(/Win 1984/)).toBeInTheDocument();
      expect(getByText(/Lisa/)).toBeInTheDocument();
      expect(getByAltText(/Windows Vista/)).toBeInTheDocument();
      expect(getByAltText(/Win 1984/)).toBeInTheDocument();
      expect(getByAltText(/Lisa artboard/)).toBeInTheDocument();
      expect(getByAltText(/Sketch logo/)).toBeInTheDocument();
    });
  });

  it("should render just the header if no data", async () => {
    const { getByText, getByAltText } = renderComponent([]);

    await wait(() => {
      expect(getByText(/Test document/)).toBeInTheDocument();
      expect(getByAltText(/Sketch logo/)).toBeInTheDocument();
    });
  });
});
