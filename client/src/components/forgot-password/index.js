import React from 'react';
import { Stack, TextField, Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import './index.scss';

const ForgotPwd = () => {
  return (
    <div className='login-container'>
      <div className='design-container'>
          <Typography variant="h6" component="h6" >Enter Email to send password reset Information</Typography>
      </div>
      <div className='content-container'>
        <Stack spacing={2}>
        <Stack direction="column" justifyContent="center" alignItems="center"><Typography variant="h3" component="h2"> Reset Password </Typography></Stack>
        <TextField id="email" label="Email" type="email" variant="standard" />
        <Button variant='contained' color='success' endIcon={<SendIcon />} > Submit </Button>
        <div className='set-center'><Link className='smooth' to='/login'><Button variant='text'>Go Back</Button> </Link></div>
        </Stack>
      </div>
    </div>
  )
}

export default ForgotPwd