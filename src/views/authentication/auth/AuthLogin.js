import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie'; // import des cookies
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import axios from 'axios';

// Définir l'URL de l'API
const LOGIN_URL = 'http://192.168.8.104:8080/auth/login';

const AuthLogin = ({ title, subtitle, subtext }) => {
  const errRef = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const cookies = new Cookies(); // création d'un objet cookies

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(
        LOGIN_URL,
        JSON.stringify({ email: username, password }), // correction : il manquait un champ "email"
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(JSON.stringify(response));
        if (response.status === 200) {
          // correction : il fallait utiliser === au lieu de ==
          cookies.set('Authorization', response.data.token);
          navigate('/', { token: response.data.token });
        } else {
          setErrMsg('User not registered'); // correction : message d'erreur était mal formulé
        }
      })
      .catch((err) => {
        console.log(err);
        setErrMsg('Error occurred while logging in'); // correction : message d'erreur plus générique
      });
  };

  return (
    <>
      {title && (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      )}

      {subtext}
      <form onSubmit={handleSubmit}>
        <Stack>
          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="username"
              mb="5px"
            >
              Email
            </Typography>
            <CustomTextField
              id="username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box mt="25px">
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="password"
              mb="5px"
            >
              Password
            </Typography>
            <CustomTextField
              id="password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
            {/* <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="" />
            </FormGroup> */}
            <Typography
              component={Link}
              to="/"
              fontWeight="500"
              sx={{
                textDecoration: 'none',
                color: 'primary.main',
              }}
            ></Typography>
          </Stack>
        </Stack>
        <Box>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="submit"
            style={{ backgroundColor: 'red' }}
          >
            Log In
          </Button>
        </Box>
      </form>

      {errMsg && (
        <Typography color="error" variant="subtitle1" fontWeight={600} mt={2}>
          {errMsg}
        </Typography>
      )}

      {subtitle}
    </>
  );
};

export default AuthLogin;