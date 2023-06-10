import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import DeviceList from './components/DeviceList';
import RecentTransactions from 'src/views/dashboard/components/RecentTransactions';
import { Grid, Box } from '@mui/material';


const DevicePage = () => {

  return (
    <PageContainer title="Liste de Devices" description="Liste de Devices">

      <DashboardCard title="Liste de Devices">
        <Typography>Voici la Liste de Devices</Typography>
      </DashboardCard>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <DeviceList showTitle={true} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions showTitle={true} title="Metriques récentes" />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default DevicePage;
