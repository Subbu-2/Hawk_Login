import React from 'react';
import './App.scss';
import Login from './components/login';
import { BrowserRouter as Router,	Routes,	Route } from 'react-router-dom';
import Logout from './components/logout';
import Signup from './components/signup';
import ForgotPwd from './components/forgot-password';
import UpdateProfile from './components/update-profile';
import Dashboard from './components/dashboard';


const App = () => {
  return (
    <Router>   
      <div className='main-container'>
      <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/forgot-password' element={<ForgotPwd />} />
      <Route path='/update-profile' element={<UpdateProfile />} />
      <Route exact path='/' element={<Dashboard />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App