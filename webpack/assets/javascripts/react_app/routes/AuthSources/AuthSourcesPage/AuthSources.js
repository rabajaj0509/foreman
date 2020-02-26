import React from 'react';
import PageLayout from '../../common/PageLayout/PageLayout';
import EmptyState from './Components/EmptyState'

const AuthSources = props => (
  <PageLayout header={__('Auth Sources')} searchable={false}>
    <EmptyState />
  </PageLayout>
);

export default AuthSources;
