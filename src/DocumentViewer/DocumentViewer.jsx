import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { ArtboardList } from "./ArtboardList";
import { HeaderDocumentViewer } from "../Header";

const DocumentViewer = ({ documentName, artboards }) => {
  const { documentId } = useParams();
  return (
    <>
      <HeaderDocumentViewer>{documentName}</HeaderDocumentViewer>
      <ArtboardList>
        {artboards.map((artboard) => (
          <ArtboardList.Item
            key={artboard?.name}
            documentId={documentId}
            name={artboard?.name}
            src={artboard?.files[0].url}
          />
        ))}
      </ArtboardList>
    </>
  );
};

DocumentViewer.propTypes = {
  documentName: PropTypes.string,
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

export { DocumentViewer };
