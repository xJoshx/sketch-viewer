import React from "react";
import { useParams } from "react-router-dom";
import { ArtboardList } from "./ArtboardList";
import { HeaderDocumentViewer } from "../Header";

const DocumentViewer = ({ documentName, artboards }) => {
  const { documentId } = useParams();
  return (
    <>
      <HeaderDocumentViewer>{documentName}</HeaderDocumentViewer>
      <ArtboardList>
        {artboards.map(({ name, files }) => (
          <ArtboardList.Item
            key={name}
            documentId={documentId}
            name={name}
            src={files[0].url}
          />
        ))}
      </ArtboardList>
    </>
  );
};

export { DocumentViewer };
