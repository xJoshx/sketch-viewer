import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { HeaderArtboardViewer } from "../Header";

const ArtboardWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 48px;
  box-sizing: border-box;
`;

const Artboard = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const ArtboardViewer = ({ artboards }) => {
  const { artboardId } = useParams();

  const selectedArtboard = artboards.find(({ name }) => name === artboardId);

  return (
    <>
      <HeaderArtboardViewer>{selectedArtboard.name}</HeaderArtboardViewer>
      <ArtboardWrapper>
        <Artboard src={selectedArtboard.files[1].url} />
      </ArtboardWrapper>
    </>
  );
};

export { ArtboardViewer };
