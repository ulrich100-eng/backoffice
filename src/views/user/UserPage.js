import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import UserList from './components/UserList';


const UserPage = () => {

  return (
    <PageContainer title="Liste d'Utilisateurs" description="Liste d'Utilisateurs">

      <DashboardCard title="Liste d'Utilisateurs">
        <Typography>Voici la Liste d'Utilisateurs</Typography>
      </DashboardCard>

      <UserList showTitle={false}/>
    </PageContainer>
  );
};

export default UserPage;
