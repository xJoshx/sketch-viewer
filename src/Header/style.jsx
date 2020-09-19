import styled from "styled-components";
import sketchLogoSrc from "../assets/sketch-logo.svg";
import separator from "../assets/separator.svg";
import closeIcon from "../assets/close.svg";
import leftArrowIcon from "../assets/arrow-left.svg";
import rightArrowIcon from "../assets/arrow-right.svg";

const CloseIcon = styled.img.attrs(() => ({
  src: closeIcon,
}))``;

const LeftArrowIcon = styled.img.attrs(() => ({
  src: leftArrowIcon,
}))``;

const RightArrowIcon = styled.img.attrs(() => ({
  src: rightArrowIcon,
}))``;

const SketchLogo = styled.img.attrs(() => ({
  src: sketchLogoSrc,
}))`
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

const TitleWrapper = styled.div`
  display: block;
  width: 100%;
  text-align: center;
`;

const HeaderButton = styled.button`
  padding: 24px;
`;

const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

const NavigationButton = styled.button`
  width: 17px;
  height: 17px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CurrentPage = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 16px;
  white-space: nowrap;
  margin: 0 16px;
`;

const HeaderActions = styled.div`
  position: absolute;
  display: flex;
  left: 0;
`;

export {
  Title,
  NavigationWrapper,
  CurrentPage,
  SketchLogo,
  Separator,
  TitleWrapper,
  HeaderButton,
  NavigationButton,
  CloseIcon,
  LeftArrowIcon,
  RightArrowIcon,
  HeaderActions,
};
