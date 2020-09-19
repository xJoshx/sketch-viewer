import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ArtboardList } from "./ArtboardList";
import { FETCH_DOCUMENTS_QUERY } from "../fetchDocumentsQuery";

const Loading = () => <div>loading...</div>;

const DocumentViewer = () => {
  const { documentId } = useParams();
  const { data, loading, error } = useQuery(FETCH_DOCUMENTS_QUERY, {
    variables: { documentId },
  });

  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const {
    share: {
      version: {
        document: {
          artboards: { entries },
        },
      },
    },
  } = data;

  return (
    <ArtboardList>
      {entries.map(({ name, files }) => (
        <ArtboardList.Item
          key={name}
          documentId={documentId}
          name={name}
          src={files[0].url}
        />
      ))}
    </ArtboardList>
  );
};

export { DocumentViewer };
