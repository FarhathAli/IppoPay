import React from 'react';
import "./Navbar.scss";
import { useNavigate } from 'react-router-dom';
// import { Context } from '../context/Context';

const Navbar = () => {
    let history = useNavigate();
    // const {user, dispatch} = useContext(Context);

    const handleLogout = ()=>{
        window.location.replace("/")
    }
  return (
    <div className='main'>
        <div className='left'>Navbar</div>
        <div className='center' to="signin" onClick={()=>{history('/signin')}}>Signin</div>
        {/* <div className='right' to="register" onClick={()=>{history('/register')}}>Register</div> */}
        <div className='right' onClick={handleLogout}>Logout</div>
    </div>
  )
}

export default Navbar