import React from "react";
import { render, wait } from "@testing-library/react";
import { DocumentViewer } from "../DocumentViewer";
import mockData from "../__mocks__/mockData";

const renderComponent = (data = mockData) =>
  render(<DocumentViewer artboards={data} />);

describe("DocumentViewer", () => {
  it("should render all the artboards that receive from props", () => {});
});
