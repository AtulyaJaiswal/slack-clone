import React from 'react';
import './Login.css';
import { Button } from '@mui/material';
import {auth,provider} from './firebase';
import { useStateValue } from './StateProvider';
import {actionTypes} from './reducer';

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(error => {
            alert(error.message);
        })
    };

  return (
    <div className='login'>
        <div className='login_container'>
            <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png"
                alt=""
            />
            <h1>Welcome</h1>
            <p>lets do it</p>
            <Button onClick={signIn}>Sign in with Google</Button>
        </div>
    </div>
  )
}

export default Login;