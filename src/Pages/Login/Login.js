import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle}= useAuth()
    return (
        <div className="login">
            <br /><br /><br />
            <h2 className="title">----- Login Please -----</h2>
            {/* <button onClick={signInUsingGoogle}>Sign In with Google</button> */}
            <button onClick={signInUsingGoogle}>Sign In with Google</button>
        </div>
    );
};

export default Login;