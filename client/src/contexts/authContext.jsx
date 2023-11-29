/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import {useNavigate } from 'react-router-dom';
import { createContext } from "react";
import * as authService from '../services/authService'
import Path from '../paths';
import usePersistedState from '../hooks/usePersistedState';

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth,setAuth] = usePersistedState('auth',{});
      const navigate = useNavigate();
    
      const loginSubmitHandler = async(values) => {
       const res = await authService.login(values.email,values.password);
    
       setAuth(res)
       localStorage.setItem('accessToken',res.accessToken);
       navigate(Path.Home)
      }
      const registerSubmitHandler = async(values) =>{
      
        const res = await authService.register(values.email,values.password);
        setAuth(res)
       localStorage.setItem('accessToken',res.accessToken);
        navigate(Path.Home)
      }
    
      const logoutHandler = async() => {
        setAuth({});
        localStorage.removeItem('accessToken');
        navigate(Path.Home)
    
      }
      const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username:auth.username || auth.email,
        email:auth.email,
        isAuthenticated: !!auth.accessToken,
        _id:auth._id
      }
    
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext; 