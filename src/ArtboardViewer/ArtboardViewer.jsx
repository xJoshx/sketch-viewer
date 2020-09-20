import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { HeaderArtboardViewer } from "../Header";

const ArtboardWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${({ theme }) => theme.space[8]});
  padding: ${({ theme }) => theme.space[7]};
  box-sizing: border-box;
`;

const Artboard = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const CurrentPositionSeparator = styled.span`
  margin: 0 ${({ theme }) => theme.space[1]};
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
  }, [currentArtboardPosition]); // eslint-disable-line react-hooks/exhaustive-deps

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
        {selectedArtboard?.name}
      </HeaderArtboardViewer>
      <ArtboardWrapper>
        <Artboard src={selectedArtboard?.files[1]?.url} />
      </ArtboardWrapper>
    </>
  );
};

ArtboardViewer.propTypes = {
  artboards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      files: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
        })
      ),
    })
  ),
};

export { ArtboardViewer };
