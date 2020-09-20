import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ArtboardListLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${({ theme }) => theme.space[7]};
  padding: ${({ theme }) => theme.space[5]};
  align-items: center;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${({ theme }) => theme.space[6]};
  }

  @media only screen and (max-width: 414px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: ${({ theme }) => theme.space[3]};
  }
`;

const ThumbnailWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const ArtboardName = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  margin-top: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  height: 100%;
  padding: ${({ theme }) => theme.space[3]};
  border-radius: ${({ theme }) => theme.space[1]};
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const ArtboardListItem = ({ documentId, name, src }) => (
  <StyledLink to={`/${documentId}/artboard/${name}`}>
    <ThumbnailWrapper>
      <Thumbnail src={src} alt={`${name} artboard thumbnail`} />
    </ThumbnailWrapper>
    <ArtboardName>{name}</ArtboardName>
  </StyledLink>
);

const ArtboardList = ({ children }) => (
  <ArtboardListLayout>{children}</ArtboardListLayout>
);

ArtboardList.Item = ArtboardListItem;

ArtboardListItem.propTypes = {
  documentId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

ArtboardList.propTypes = {
  children: PropTypes.node,
};

export { ArtboardList };
