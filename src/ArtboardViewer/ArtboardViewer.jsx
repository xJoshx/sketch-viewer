import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { HeaderArtboardViewer } from "../Header";

const ArtboardWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
  padding: 48px;
  box-sizing: border-box;
`;

const Artboard = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const CurrentPositionSeparator = styled.span`
  margin: 0 8px;
`;

const CurrentPosition = ({ current, total }) => (
  <>
    {current}
    <CurrentPositionSeparator>/</CurrentPositionSeparator>
    {total}
  </>
);

const ArtboardViewer = ({ artboards }) => {
  const { artboardId } = useParams();
  const [currentArtboardPosition, setCurrentArtboardPosition] = useState(
    artboards.findIndex(({ name }) => name === artboardId)
  );
  const [selectedArtboard, setSelectedArtboard] = useState(
    artboards[currentArtboardPosition]
  );

  useEffect(() => {
    setSelectedArtboard(artboards[currentArtboardPosition]);
  }, [currentArtboardPosition]);

  const handleNavigateLeft = () => {
    if (currentArtboardPosition === 0) return;
    setCurrentArtboardPosition(currentArtboardPosition - 1);
  };

  const handleNavigateRight = () => {
    if (currentArtboardPosition + 1 === artboards.length) return;
    setCurrentArtboardPosition(currentArtboardPosition + 1);
  };

  return (
    <>
      <HeaderArtboardViewer
        currentPosition={
          <CurrentPosition
            current={currentArtboardPosition + 1}
            total={artboards.length}
          />
        }
        handleNavigateLeft={handleNavigateLeft}
        handleNavigateRight={handleNavigateRight}
      >
        {selectedArtboard.name}
      </HeaderArtboardViewer>
      <ArtboardWrapper>
        <Artboard src={selectedArtboard.files[1].url} />
      </ArtboardWrapper>
    </>
  );
};

export { ArtboardViewer };
