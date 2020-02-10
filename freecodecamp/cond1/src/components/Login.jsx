import React from 'react';

function Login(props) {
  const logInText = props.loggedIn ? "User is logged in" : "User is logged out";
  const buttonText = props.loggedIn ? "Log out" : "Log in";
  
  return (
    <div>
      {logInText}
      <input type="button" onClick={props.handleClick} value={buttonText}/>
    </div>
  )
}

export default Login;