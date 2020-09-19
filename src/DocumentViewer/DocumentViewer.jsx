import React from "react";
import { gql, useQuery } from "@apollo/client";
import { ArtboardList } from "./ArtboardList";

const FETCH_DOCUMENTS_QUERY = gql`
  query fetchDocuments($documentId: String) {
    share(shortId: $documentId) {
      shortId
      version {
        document {
          name
          artboards {
            entries {
              name
              isArtboard
              files {
                url
                height
                width
                scale
                thumbnails {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Loading = () => <div>loading...</div>;

export const DocumentViewer = () => {
  const { data, loading, error } = useQuery(FETCH_DOCUMENTS_QUERY, {
    variables: { documentId: "Y8wDM" },
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

  console.log(entries);

  return (
    <ArtboardList>
      {entries.map(({ name, files }) => (
        <ArtboardList.Item key={name} name={name} src={files[0].url} />
      ))}
    </ArtboardList>
  );
};
