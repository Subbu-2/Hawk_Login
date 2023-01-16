import React from 'react';
import { Stack, TextField, Button, Typography, FormLabel } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import './index.scss';

const Signup = () => {
  return (
    <div className='signup-container'>
      <div className='signup-content-container'>
        <Stack spacing={2}>
        <Stack direction="column" justifyContent="center" alignItems="center"><Typography variant="h3" component="h2"> Sign Up </Typography></Stack>
        <TextField id="email" label="Email" type="email" variant="standard" />
        <TextField id="pwd" label="Password" type="password" variant="standard" />
        <TextField id="con-pwd" label="Confirm Password" type="password" variant="standard" />
        <Button variant='contained' color='success' endIcon={<SendIcon />} > SignUp </Button>
        <div><FormLabel>Already have a acccount? </FormLabel><Link className='smooth' to='/login'><Button variant='text'>Login</Button></Link></div>
        </Stack>
      </div>
      <div className='signup-design-container'>
        <Typography variant="h6" component="h6" >First Time Visiting ? Click to SignUp</Typography>
      </div>
    </div>
  )
}

export default Signup