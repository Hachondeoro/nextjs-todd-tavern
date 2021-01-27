import React from "react";
import AUTHORS_QUERY from "components/Queries/authors.js";
import { gql } from "@apollo/client";
import { useMutation } from "react-apollo";
import { Query } from "react-apollo";

const AUTHOR_UPDATE_MUTATION = gql`
  mutation($oldname: String!, $newname: String!) {
    updateAuthor(where: { name: $oldname }, data: { name: $newname }) {
      id
    }
  }
`;

export default function Authors() {
  const [changeAuthor] = useMutation(AUTHOR_UPDATE_MUTATION);
  let input;

  return (
    <>
      <div className="text-center">
        <Query query={AUTHORS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;
            const items = data.authors;

            return (
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    changeAuthor({
                      variables: {
                        oldname: items[0].name,
                        newname: input.value,
                      },
                    });
                    input.value = "";
                  }}
                >
                  <input
                    ref={(node) => {
                      input = node;
                    }}
                  />
                  <button type="submit">Update first Author</button>
                </form>
                {items.map((item) => (
                  <div>
                    <p>
                      {item.name}:{item.country},{item.age}
                    </p>
                  </div>
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    </>
  );
}
