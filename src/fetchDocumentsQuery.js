import { gql } from "@apollo/client";

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

export { FETCH_DOCUMENTS_QUERY };
