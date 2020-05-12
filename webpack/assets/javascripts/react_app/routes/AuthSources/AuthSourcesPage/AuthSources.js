import React from 'react';
// import PageLayout from '../../common/PageLayout/PageLayout';
import AuthSourceTable from './Components/Table';
import AuthSourceCard from './Components/Card';
import AuthSourceEmptyState from './Components/EmptyState';

const AuthSources = props => {
  props.fetchTableData();
  return <h1>{props.host}</h1>;
};

export default AuthSources;
