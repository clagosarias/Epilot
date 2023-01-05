## Description
This is a simple Github user search app. It allows you to search for users and view their profiles (Name, Avatar and public url) and repositories (with minor detail such as: Forks, Stars and Description).

## Tech Stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and its TypeScript template.

It uses [Styled Components](https://styled-components.com/) for styling.

It uses [React Router](https://reactrouter.com/) for routing.

It uses [Octokit](https://github.com/octokit/graphql.js/) for GitHub API calls directly in GraphQL and it does so with relay-style pagination.
## Available Scripts

**Important:** _First you need to set a GitHub API token in the .env file. You can work with a [Personal Acces Token](https://github.com/settings/tokens)_

Then, in the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner (Jest) in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
