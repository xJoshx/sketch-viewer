import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, wait } from "@testing-library/react";
import { HeaderDocumentViewer, HeaderArtboardViewer } from "../Header";
import { Theme } from "../../Theme";

const renderHeaderArtworkViewer = ({
  handleClose = jest.fn,
  handleNavigateLeft = jest.fn,
  handleNavigateRight = jest.fn,
}) =>
  render(
    <Theme>
      <HeaderArtboardViewer
        currentPosition={<span>1/5</span>}
        handleClose={handleClose}
        handleNavigateLeft={handleNavigateLeft}
        handleNavigateRight={handleNavigateRight}
      >
        Test title
      </HeaderArtboardViewer>
    </Theme>
  );

describe("HeaderDocumentViewer", () => {
  it("should render it with logo, separator and title", () => {
    const { getByAltText, getByText } = render(
      <Theme>
        <HeaderDocumentViewer>Test title</HeaderDocumentViewer>
      </Theme>
    );

    expect(getByAltText(/Sketch logo/));
    expect(getByAltText(/separator/));
    expect(getByText(/Test title/));
  });
});

describe("HeaderArtboardViewer", () => {
  it("should render it with close button, navigation and title", () => {
    const { getByAltText, getByText } = renderHeaderArtworkViewer({});

    expect(getByAltText(/left arrow icon/)).toBeInTheDocument();
    expect(getByAltText(/right arrow icon/)).toBeInTheDocument();
    expect(getByAltText(/close icon/)).toBeInTheDocument();
    expect(getByText(/Test title/)).toBeInTheDocument();
    expect(getByText(/1\/5/)).toBeInTheDocument();
  });

  it("should call the functions when clicking on the close and navigation buttons", async () => {
    const navigationHandlers = {
      handleNavigateLeft: jest.fn,
      handleNavigateRight: jest.fn,
      handleClose: jest.fn,
    };
    const leftNavigationSpy = jest.spyOn(
      navigationHandlers,
      "handleNavigateLeft"
    );
    const rightNavigationSpy = jest.spyOn(
      navigationHandlers,
      "handleNavigateRight"
    );

    const closeSpy = jest.spyOn(navigationHandlers, "handleClose");

    const { getByAltText } = renderHeaderArtworkViewer(navigationHandlers);
    fireEvent.click(getByAltText(/left arrow icon/));
    fireEvent.click(getByAltText(/right arrow icon/));
    fireEvent.click(getByAltText(/close icon/));

    expect(leftNavigationSpy).toHaveBeenCalled();
    expect(rightNavigationSpy).toHaveBeenCalled();
    expect(closeSpy).toHaveBeenCalled();
  });
});
