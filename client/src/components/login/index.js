import React from 'react';
import { Stack, TextField, Button, Typography, FormLabel } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import './index.scss';

const Login = () => {
  return (
    <div className='login-container'>
      <div className='design-container'>
          <Typography variant="h6" component="h6" >Welcome back</Typography>
      </div>
      <div className='content-container'>
        <Stack spacing={2}>
        <Stack direction="column" justifyContent="center" alignItems="center"><Typography variant="h3" component="h2"> Login </Typography></Stack>
        <TextField id="email" label="Email" type="email" variant="standard" />
        <TextField id="pwd" label="Password" type="password" variant="standard" />
        <Button variant='contained' color='success' endIcon={<SendIcon />} > Login </Button>
        <div><FormLabel>Do not have a acccount? </FormLabel><Link className='smooth' to='/signup'><Button variant='text'>Signup</Button> </Link></div>
        <div><FormLabel>Issue Signing in? </FormLabel><Link className='smooth' to='/forgot-password'><Button variant='text'>Forgot Password</Button> </Link></div>
        </Stack>
      </div>
    </div>
  )
}

export default Login