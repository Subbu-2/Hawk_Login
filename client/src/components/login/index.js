import React, { useEffect, useRef, useState } from 'react';
import { Stack, TextField, Button, Typography, FormLabel } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Link,useNavigate } from 'react-router-dom';
import './index.scss';
import { Login_Service_End_Point } from '../../Api';

const Login = () => {
  const [userDetails,setUserDetails] = useState({})
  const navigate = useNavigate();
  const [error, setError] = useState(null)
  const [load, setLoad] = useState(false)
  const userRef = useRef()
  const passwordRef = useRef()
  async function callLoginService() {
    setError(null)
    if(!userRef.current.value){
       return console.log("enter userName")
      }
    
    if(!passwordRef.current.value){
      return console.log("enter passowrd")
    }
    await fetch(`${Login_Service_End_Point}/${userRef.current.value}`)
    .then(response => response.json())
    .then((response)=>{
      setLoad(true)
      setUserDetails(response)
    },(error)=>{
      setLoad(true)
      setError(error)
    })
   }
   useEffect(()=>{
    if(userDetails){
      if (userDetails.password === passwordRef.current.value){
        navigate('/');
      }
      else{
        setError("password doesnot match")
      }    
  }
   },[userDetails,navigate])
  return (
    <div className='login-container'>
      <div className='design-container'>
          <Typography variant="h6" component="h6" >Welcome back</Typography>
      </div>
      <div className='content-container'>
        <Stack spacing={2}>
        <Stack direction="column" justifyContent="center" alignItems="center"><Typography variant="h3" component="h2"> Login </Typography></Stack>
        <TextField id="email" label="Username" type="text" variant="standard" inputRef={userRef}/>
        <TextField id="pwd" label="Password" type="text" variant="standard" inputRef={passwordRef} />
        <Button variant='contained' color='success' onClick={callLoginService} endIcon={<SendIcon />} > Login </Button>
        <div><FormLabel>Do not have a acccount? </FormLabel><Link className='smooth' to='/signup'><Button variant='text'>Signup</Button> </Link></div>
        <div><FormLabel>Issue Signing in? </FormLabel><Link className='smooth' to='/forgot-password'><Button variant='text'>Forgot Password</Button> </Link></div>
        </Stack>
      </div>
    </div>
  )
}

export default Login