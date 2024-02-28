import React, { useState } from 'react';
import { postData } from '../../Utilities/apiBase';
import { storeUserToken } from '../../Utilities/authTokens';
import { useHistory } from 'react-router-dom';



const LoginPage = () => {
    debugger
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



  const handleLogin = async() => {
    let formData = {email, password}
    
    const postTheData =  await postData("user/login", formData);
    debugger
    if(storeUserToken(postTheData.data.token)){
        history.push("/dashboard");
    }

  };

 
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
