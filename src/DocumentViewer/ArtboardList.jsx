import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ArtboardListLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 60px;
  padding: 24px;
  align-items: center;
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
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  height: 100%;
  padding: 16px;
  border-radius: 8px;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const ArtboardListItem = ({ documentId, name, src }) => {
  return (
    <StyledLink to={`/${documentId}/artboard/${name}`}>
      <ThumbnailWrapper>
        <Thumbnail src={src} />
      </ThumbnailWrapper>
      <ArtboardName>{name}</ArtboardName>
    </StyledLink>
  );
};

const ArtboardList = ({ children }) => (
  <ArtboardListLayout>{children}</ArtboardListLayout>
);

ArtboardList.Item = ArtboardListItem;

export { ArtboardList };
