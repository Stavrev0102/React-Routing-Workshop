/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import {Link} from 'react-router-dom';

import useForm from "../../hooks/useForm";

export default function Login(){

  const { values,onChange,onSubmit} = useForm({
    email:'',
    password:''
  });

    return (
      <section id="login-page" className="auth">
        <form onSubmit={onSubmit }id="login">

          <div className="container">
            <div className="brand-logo" />
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Sokka@gmail.com"
              onChange={onChange}
              value={values.email}
            />
            <label htmlFor="login-pass">Password:</label>
            <input
             type="password" 
             id="login-password"
             name="password"
             onChange={onChange}
             value={values.password}


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