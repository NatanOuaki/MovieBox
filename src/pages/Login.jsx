import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import '../assets/css/login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

    }

    return(
        <>     
          <div className='containerForm'>                                            
              <form className='formFields'>                                              
                      <input
                          id="email-address"
                          name="email"
                          type="email"                                    
                          required                                                                                
                          placeholder="Email address"
                          onChange={(e)=>setEmail(e.target.value)}
                      />
                      <input
                          id="password"
                          name="password"
                          type="password"                                    
                          required                                                                                
                          placeholder="Password"
                          onChange={(e)=>setPassword(e.target.value)}
                      />
                      <button onClick={onLogin}> Login </button>                              
              </form>

              <p className="text-sm text-white text-center">
                  No account yet? {' '}
                  <NavLink to="/signup" className="navLinkForm">
                      Sign up
                  </NavLink>
              </p>

          </div>
        </>
    )
}

export default Login