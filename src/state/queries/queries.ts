import { graphql } from "@octokit/graphql";
export const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

export const GET_USER_REPOS = `
  query getUserRepos($login: String!, $after: String, $before: String, $first: Int, $last: Int) {
    user(login: $login) {
      avatarUrl
      name
      url
      repositories(first: $first, after: $after, before: $before, last: $last) {
        totalCount
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            id
            name
            stargazerCount
            forkCount
            url
            description
          }
        }
      }
    }
  }
`;