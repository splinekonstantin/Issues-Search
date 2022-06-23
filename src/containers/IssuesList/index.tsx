import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';

import { LOAD_ISSUES } from './gql/query';

export const IssuesList = () => {
  const { error, loading, data } = useQuery(LOAD_ISSUES);
  //   const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      console.log('!!!!!!', data);
    }
  }, [data]);

  return <div>Список Issues</div>;
};
