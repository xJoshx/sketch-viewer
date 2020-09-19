import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { client } from "../App";
import { FETCH_DOCUMENTS_QUERY } from "../fetchDocumentsQuery.js";

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

const ArtboardViewer = () => {
  const { documentId, artboardId } = useParams();
  const data = client.readQuery({
    query: FETCH_DOCUMENTS_QUERY,
    variables: { documentId },
  });

  const {
    share: {
      version: {
        document: {
          artboards: { entries },
        },
      },
    },
  } = data;

  const selectedArtboard = entries.find(({ name }) => name === artboardId);

  return (
    <ArtboardWrapper>
      <Artboard src={selectedArtboard.files[1].url} />
    </ArtboardWrapper>
  );
};

export { ArtboardViewer };
