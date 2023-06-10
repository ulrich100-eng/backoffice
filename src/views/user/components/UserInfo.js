import React, { useState } from 'react';
import { Typography, Button, Grid, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import { useLocation } from 'react-router-dom';
import AjoutDevice from './AjoutDevice';

const UserInfo = () => {
  const location = useLocation();
  const { user } = location.state;

  // Access user's properties
  const { uid } = useParams();
  const { id, name, post, pname, priority, pbg, deviceNum, budget } = user;

  const [openAddDevice, setOpenAddDevice] = useState(false);

  const handleAddDevice = () => {
    setOpenAddDevice(true);
  };

  const handleCloseAddDevice = () => {
    setOpenAddDevice(false);
  };

  const handleEditUser = () => {
    // Perform the user edit action
  };

  const handleDeleteUser = () => {
    // Perform the user delete action
  };

  return (
    <>
      <PageContainer title="User Info" description="This page is about a specific user">
        <DashboardCard title="User Info">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box>
                <Typography>This is an information page about {name}.</Typography>
                {/* Display other user information */}
                <Typography>User ID: {id}</Typography>
                <Typography>Post: {post}</Typography>
                <Typography>PName: {pname}</Typography>
                <Typography>Priority: {priority}</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" flexDirection="column" alignItems="flex-end">
                <Button variant="outlined" size="small" sx={{ marginBottom: 1 }} onClick={handleAddDevice}>
                  Ajouter une device
                </Button>
                <Button variant="outlined" size="small" sx={{ marginBottom: 1 }} onClick={handleEditUser}>
                  Modifier User
                </Button>
                <Button variant="outlined" size="small" onClick={handleDeleteUser}>
                  Supprimer User
                </Button>
              </Box>
            </Grid>
          </Grid>
        </DashboardCard>
      </PageContainer>

      <AjoutDevice open={openAddDevice} onClose={handleCloseAddDevice} selectedUser={user} />
    </>
  );
};

export default UserInfo;
