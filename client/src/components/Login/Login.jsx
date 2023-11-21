/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import useForm from "../../hooks/useForm";

import AuthContext from '../../contexts/authContext';

const loginFormKeys = {
  Email:'email',
  Password:'password'
}

export default function Login(){

  const {loginSubmitHandler} = useContext(AuthContext)
  const { values,onChange,onSubmit} = useForm(loginSubmitHandler,{
    [loginFormKeys.Email]:'',
    [loginFormKeys.Password]:''
  });

    return (
      <section id="login-page" className="auth">
        <form onSubmit={onSubmit } id="login">

          <div className="container">
            <div className="brand-logo" />
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name={loginFormKeys.Email}
              placeholder="Sokka@gmail.com"
              onChange={onChange}
              value={values[loginFormKeys.Email]}
            />
            <label htmlFor="login-pass">Password:</label>
            <input
             type="password" 
             id="login-password"
             name={loginFormKeys.Password}
             onChange={onChange}
             value={values[loginFormKeys.Password]}


             />
            <input type="submit" className="btn submit" defaultValue="Login" />
            <p className="field">
              <span>
                If you don't have profile click <Link to='/register'>here</Link>
              </span>
            </p>
          </div>
        </form>
      </section>
    );
}