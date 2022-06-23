import { gql } from '@apollo/client';

export const LOAD_ISSUES = gql`
  query {
    repositoryOwner(login: "facebook") {
      repository(name: "react") {
        issues(first: 10) {
          totalCount
          edges {
            node {
              body
            }
          }
        }
      }
    }
  }
`;
