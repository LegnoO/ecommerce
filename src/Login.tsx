/** @format */

import { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import {
  Grid,
  Box,
  Input,
  InputLabel,
  FormGroup,
  Typography,
  FormControlLabel,
  Checkbox,
  Button
} from '@mui/material';
import axios from 'axios';

import { useAppSelector, useAppDispatch } from './app/hooks';
import httpRequest from './services/apiService';
interface IProps {}

const Login: React.FC<IProps> = ({ ...props }) => {
  // const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const handleSubmit = async () => {
    // axios.post(
    //   "https://ecommerce-api-133d7-default-rtdb.firebaseio.com/users.json",
    //   {
    //     id: nanoid(),
    //     username: "empty",
    //     password: "empty",
    //   }
    // );

    setLoading(true);
    const response = await httpRequest('GET', '/users');
    const users = [response.data];
    console.log(users);
    const check = users.some((data: any) => data.username === 'admin' && data.password === 'admin');
    if (check) {
      sessionStorage.setItem('users', JSON.stringify(check));
    }
    setLoading(false);
  };
  return (
    <>
      <Box sx={{ height: '100vh' }}>
        <Grid container sx={{ height: '100%' }}>
          <Grid item xs={6} sx={{ backgroundColor: '#f6f7fc' }}>
            <Box className="d-flex justify-content-center align-items-center h-100">
              <Grid item xs={7} sx={{ mb: 3 }}>
                <Box sx={{ height: 'fit-content', width: '100%' }}>
                  {/* <Typography sx={{ fontSize: '28px', color: 'text.black', mb: 1 }} component="h5">
                    Login to
                  </Typography> */}
                  <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                    <img
                      src="https://minim-demo.myshopify.com/cdn/shop/t/4/assets/logo.png?v=76281246793426370331552127529"
                      alt=""
                    />
                  </Box>
                  <Typography
                    sx={{ fontSize: '16px', color: 'text.disabled', mb: 3 }}
                    component="p"
                  >
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.
                  </Typography>
                  <FormGroup sx={{ mb: 2 }}>
                    <InputLabel sx={{ color: 'common.black', mb: 1 }} htmlFor="input">
                      Username
                    </InputLabel>
                    <Input
                      type="text"
                      id="username-field"
                      name="username"
                      sx={{
                        fontSize: '1rem',
                        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
                        borderRadius: '4px',
                        background: '#fff',
                        padding: '10px'
                      }}
                      disableUnderline
                      placeholder="your-email@gmail.com"
                    />
                  </FormGroup>
                  <FormGroup sx={{ mb: 2 }}>
                    <InputLabel sx={{ color: 'common.black', mb: 1 }} htmlFor="input">
                      Password
                    </InputLabel>
                    <Input
                      id="input"
                      name="abc"
                      sx={{
                        fontSize: '1rem',
                        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
                        borderRadius: '4px',
                        background: '#fff',
                        padding: '10px'
                      }}
                      disableUnderline
                      placeholder="Your Password"
                    />
                  </FormGroup>
                  <Box className="d-flex align-items-center" sx={{ mb: 6 }}>
                    <FormControlLabel
                      sx={{
                        '& > .MuiTypography-root': {
                          fontSize: 14,
                          color: 'text.black'
                        }
                      }}
                      label="Remember me"
                      control={
                        <Checkbox
                          sx={{
                            color: 'rgba(251, 119, 26, 1)',
                            '&.Mui-checked': {
                              color: 'rgba(251, 119, 26, 1)'
                            }
                          }}
                        />
                      }
                    />
                    <Typography
                      className="cursor-pointer"
                      sx={{
                        ml: 'auto',
                        fontSize: 14,
                        color: '#888',
                        textDecoration: 'underline'
                      }}
                    >
                      Forgot Password
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleSubmit}
                    className="text-normal"
                    fullWidth
                    variant="contained"
                    sx={{
                      '&': {
                        mb: 3,
                        paddingY: 1.5,
                        fontSize: '1rem',
                        backgroundColor: 'rgba(251, 119, 26, 1)',
                        borderColor: 'rgba(251, 119, 26, 1)'
                      },
                      '&:hover': { backgroundColor: 'rgba(251, 119, 26, 0.9)' }
                    }}
                  >
                    {loading ? '...' : 'Login'}
                  </Button>
                  <Typography className="text-center" sx={{ fontSize: 16, color: 'text.disabled' }}>
                    Not Registered?{' '}
                    <Typography
                      className="cursor-pointer"
                      sx={{ color: 'rgba(251, 119, 26, 1)' }}
                      component="span"
                    >
                      Create an account
                    </Typography>
                  </Typography>
                </Box>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                height: '100%',
                backgroundImage: `url(
                    'https://preview.colorlib.com/theme/bootstrap/login-form-02/images/bg_1.jpg.webp'
                  )`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
