import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import React from 'react';

import { IssuesList } from './containers/IssuesList';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      alert(`Graphql error ${message}, locations - ${locations}, path - ${path}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: 'Bearer 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',
      // 'Access-Control-Allow-Origin': '*',
      // 'mode': 'no-cors',
    },
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <IssuesList />
    </ApolloProvider>
  );
};
