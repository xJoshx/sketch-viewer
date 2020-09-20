import React from "react";
import { render, wait } from "@testing-library/react";
import { HeaderDocumentViewer, HeaderArtboardViewer } from "../Header";
import mockData from "../__mocks__/mockData";

const renderComponent = (data = mockData) =>
  render(<HeaderDocumentViewer artboards={data} />);

describe("Header", () => {
  it("should render all the artboards that receive from props", () => {});
});
