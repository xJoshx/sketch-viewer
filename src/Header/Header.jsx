import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.nav`
  padding: 16px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
`;

const Header = ({ children }) => <HeaderWrapper>{children}</HeaderWrapper>;
const HeaderDocumentViewer = () => <Header>HeaderDocumentViewer</Header>;
const HeaderArtboardViewer = () => <Header>HeaderArtboardViewer</Header>;

export { HeaderDocumentViewer, HeaderArtboardViewer };
