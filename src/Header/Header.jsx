import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  Title,
  NavigationWrapper,
  CurrentPage,
  SketchLogo,
  Separator,
  TitleWrapper,
  HeaderButton,
  NavigationButton,
  RightArrowIcon,
  LeftArrowIcon,
  CloseIcon,
  HeaderActions,
} from "./style";

const HeaderWrapper = styled.nav`
  padding: ${({ noPadding }) => (noPadding ? 0 : "16px")};
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  height: 64px;
`;

const HeaderWrapperSubpage = styled(HeaderWrapper)`
  position: relative;
  justify-content: center;
`;

const Header = ({ children, noPadding }) => (
  <HeaderWrapper noPadding={noPadding}>{children}</HeaderWrapper>
);

const HeaderSubpage = ({ children, noPadding }) => (
  <HeaderWrapperSubpage noPadding={noPadding}>{children}</HeaderWrapperSubpage>
);

const CloseButton = ({ onClick }) => (
  <HeaderButton onClick={onClick}>
    <CloseIcon />
  </HeaderButton>
);

const LeftButton = ({ onClick }) => (
  <NavigationButton onClick={onClick}>
    <LeftArrowIcon />
  </NavigationButton>
);

const RightButton = ({ onClick }) => (
  <NavigationButton onClick={onClick}>
    <RightArrowIcon />
  </NavigationButton>
);

const Navigation = ({ children }) => (
  <NavigationWrapper>
    <LeftButton />
    <CurrentPage>{children}</CurrentPage>
    <RightButton />
  </NavigationWrapper>
);

Header.Title = Title;
Header.CloseButton = CloseButton;
Header.Navigation = Navigation;

const HeaderDocumentViewer = ({ children }) => (
  <Header>
    <SketchLogo />
    <Separator />
    <Header.Title>{children}</Header.Title>
  </Header>
);

const HeaderArtboardViewer = ({ children }) => {
  const history = useHistory();

  return (
    <HeaderSubpage noPadding>
      <HeaderActions>
        <Header.CloseButton onClick={() => history.goBack()} />
        <Header.Navigation>9 / 10</Header.Navigation>
      </HeaderActions>
      <TitleWrapper>
        <Header.Title>{children}</Header.Title>
      </TitleWrapper>
    </HeaderSubpage>
  );
};

export { HeaderDocumentViewer, HeaderArtboardViewer };
