import { ApolloClient, ApolloProvider, InMemoryCache, gql, useQuery } from '@apollo/client';
import 'antd/dist/antd.less';
import 'antd/lib/style/themes/default.less';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

dayjs.locale('en_EN');

const container = document.getElementById('root');

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

if (container) {
  const root = createRoot(container);

  root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}
