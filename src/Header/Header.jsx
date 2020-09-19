import React from "react";
import styled from "styled-components";
import sketchLogoSrc from "../assets/sketch-logo.svg";
import separator from "../assets/separator.svg";

const HeaderWrapper = styled.nav`
  padding: 16px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const SketchLogo = styled.img`
  height: 27px;
  width: auto;
`;

const Separator = styled.img.attrs(() => ({
  src: separator,
}))`
  display: block;
  height: 32px;
  margin: 0 16px;
`;

const Title = styled.h1`
  font-family: Helvetica;
  font-size: 16px;
  color: #000000;
  letter-spacing: 0;
  line-height: 16px;
`;

const Header = ({ children }) => <HeaderWrapper>{children}</HeaderWrapper>;
Header.Title = Title;

const HeaderDocumentViewer = ({ children }) => (
  <Header>
    <SketchLogo src={sketchLogoSrc} />
    <Separator />
    <Header.Title>{children}</Header.Title>
  </Header>
);
const HeaderArtboardViewer = () => <Header>HeaderArtboardViewer</Header>;

export { HeaderDocumentViewer, HeaderArtboardViewer };
