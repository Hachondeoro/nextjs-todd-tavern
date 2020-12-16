import { gql, useMutation } from "@apollo/client";

const AUTHORS_QUERY = gql`
  query MyQuery {
    authors {
      name
      country
      age
    }
  }
`;

export default AUTHORS_QUERY;
