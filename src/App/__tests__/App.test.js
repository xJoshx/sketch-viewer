import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, wait, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import { Theme } from "../../Theme";
import { App } from "../App";
import mockData from "../__mocks__/mockData";

const MOCK_DOCUMENT_ID = "Y8wDM";
const initialEntries = [`/${MOCK_DOCUMENT_ID}`];

const renderComponent = () =>
  render(
    <Theme>
      <MemoryRouter initialEntries={initialEntries} initialIndex={0}>
        <MockedProvider mocks={mockData}>
          <Switch>
            <Route path={`/:documentId`}>
              <App />
            </Route>
          </Switch>
        </MockedProvider>
      </MemoryRouter>
    </Theme>
  );

describe("App", () => {
  it("should render the main route", async () => {
    const { getByText, getByAltText } = renderComponent();

    await wait(() => {
      expect(getByText(/Screen/)).toBeInTheDocument();
      expect(getByAltText(/Sketch logo/)).toBeInTheDocument();
      expect(getByText(/Xerox alto/)).toBeInTheDocument();
      expect(getByAltText(/Xerox alto artboard thumbnail/)).toBeInTheDocument();
      expect(getByText(/Etch a Sketch/)).toBeInTheDocument();
      expect(
        getByAltText(/Etch a Sketch artboard thumbnail/)
      ).toBeInTheDocument();
      expect(getByText(/Android 4/)).toBeInTheDocument();
      expect(getByAltText(/Android 4 artboard thumbnail/)).toBeInTheDocument();
      expect(getByText(/Win 1984/)).toBeInTheDocument();
      expect(getByAltText(/Win 1984 artboard thumbnail/)).toBeInTheDocument();
      expect(getByText(/Windows Vista/)).toBeInTheDocument();
      expect(
        getByAltText(/Windows Vista artboard thumbnail/)
      ).toBeInTheDocument();
    });
  });

  it("should navigate to the viewer when clicking on an item", async () => {
    const { getByText, getByAltText } = renderComponent();

    await wait(() => {
      expect(getByText(/Etch a Sketch/)).toBeInTheDocument();
      expect(
        getByAltText(/Etch a Sketch artboard thumbnail/)
      ).toBeInTheDocument();
    });

    fireEvent.click(getByAltText(/Etch a Sketch artboard thumbnail/));

    await wait(() => {
      expect(getByText(/Etch a Sketch/)).toBeInTheDocument();
      expect(getByAltText(/Etch a Sketch artboard/)).toBeInTheDocument();
      expect(getByText(/1/)).toBeInTheDocument();
      expect(getByText(/\//)).toBeInTheDocument();
      expect(getByText(/16/)).toBeInTheDocument();
      expect(getByAltText(/left arrow icon/)).toBeInTheDocument();
      expect(getByAltText(/right arrow icon/)).toBeInTheDocument();
      expect(getByAltText(/close icon/)).toBeInTheDocument();
    });
  });
});
