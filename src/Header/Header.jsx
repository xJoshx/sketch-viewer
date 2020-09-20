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
  padding: ${({ theme, noPadding }) => (noPadding ? 0 : theme.space[3])};
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow[0]};
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.space[8]};
  position: fixed;
  width: 100%;
  top: 0;
`;

const HeaderWrapperSubpage = styled(HeaderWrapper)`
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

const Navigation = ({ children, handleNavigateLeft, handleNavigateRight }) => (
  <NavigationWrapper>
    <LeftButton onClick={handleNavigateLeft} />
    <CurrentPage>{children}</CurrentPage>
    <RightButton onClick={handleNavigateRight} />
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

const HeaderArtboardViewer = ({
  children,
  currentPosition,
  handleNavigateLeft,
  handleNavigateRight,
}) => {
  const history = useHistory();

  return (
    <HeaderSubpage noPadding>
      <HeaderActions>
        <Header.CloseButton onClick={() => history.goBack()} />
        <Header.Navigation
          handleNavigateLeft={handleNavigateLeft}
          handleNavigateRight={handleNavigateRight}
        >
          {currentPosition}
        </Header.Navigation>
      </HeaderActions>
      <TitleWrapper>
        <Header.Title>{children}</Header.Title>
      </TitleWrapper>
    </HeaderSubpage>
  );
};

export { HeaderDocumentViewer, HeaderArtboardViewer };
