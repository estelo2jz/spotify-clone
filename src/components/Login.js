import React from 'react';
import '../styles/Login.scss';
import { loginUrl } from '../spotify'

function Login() {
  return (
    <div className="login">
      <img src="https://www.stpaulabilene.org/wp-content/uploads/2018/10/spotify-logo-png-file-spotify-badge-large-png-1280.png" alt="logo" />
      
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login
