import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Card, Stack, Typography } from '@mui/material';

// components
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/full/shared/logo/Logo';
import AuthLogin from './auth/AuthLogin';
import { blue } from '@mui/material/colors';
// import img4 from 'src/assets/images/products/s11.jpg';

const Login2 = () => {
  
  return (
    <div className='bg'>
    <PageContainer title="Login" description="this is Login page">
      <Box
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            // backgroundImage: 'url("https://example.com/background-image.jpg")',
            background: 'radial-gradient(#0000CD, #0000CD, #0000CD)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3',          
          },
        }}
      >
        <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            
            <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <AuthLogin
             
                subtext={
                  <Typography variant="subtitle1" textAlign="center" color="textPrimary" mb={1}>
                 <strong><h1>ATLANTIS  GROUPE 2</h1></strong>  
                  </Typography>
                }
                subtitle={
                  <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
                  <p><strong>Administration Office</strong></p>
                    <Typography
                      component={Link}
                      to="/auth/register"
                      fontWeight="500"
                      sx={{
                        textDecoration: 'none',
                        color: blue,
                       
                      }}
                    >
                   
                    </Typography>
                  </Stack>
                  
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
    </div>
  );
};

export default Login2;

