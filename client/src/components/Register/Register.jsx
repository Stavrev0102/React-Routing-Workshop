/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const registerKeys = {
  Email:'email',
  Password:'password',
  ConfirmPassword:'confirm-password'
}
export default function Register(){


  const {registerSubmitHandler } = useContext(AuthContext);
  const {values,onChange,onSubmit} = useForm( registerSubmitHandler, {
    [registerKeys.Email]:'',
    [registerKeys.Password]:'',
    [registerKeys.ConfirmPassword]:'',
  })
    return (
      <section id="register-page" className="content auth">
        <form id="register" onSubmit={onSubmit}>
          <div className="container">
            <div className="brand-logo" />
            
            <h1>Register</h1>
            <label htmlFor="email">Email:</label>
            <input type="email"
             id="email"
             name="email"
             placeholder="maria@email.com"
             onChange={onChange}
             values={values[registerKeys.Email]}
             />

            <label htmlFor="pass">Password:</label>
            <input 
            type="password"
            name="password"
            id="register-password" 
            onChange={onChange}
            values={values[registerKeys.Password]}
            />

            <label htmlFor="con-pass">Confirm Password:</label>
            <input 
            type="password"
            name="confirm-password"
            id="confirm-password"
            onChange={onChange}
            values={values[registerKeys.ConfirmPassword]}
            
               />

            <input className="btn submit" type="submit" defaultValue="Register" />
            <p className="field">
              <span>
                If you already have profile click <Link to='/login'>here</Link>
              </span>
            </p>
          </div>
        </form>
      </section>
    );
}