/* eslint-disable no-unused-vars */
import { Routes,Route, useNavigate } from 'react-router-dom';
import { useState } from "react";

import AuthContext from "./contexts/authContext";
import * as authService from './services/authService'


import GameCreate from "./components/Game-Create/GameCreate";
import GameList from "./components/Game-List/GameList";
import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GameDetails from "./components/Game-Details/GameDetails";
import Path from './paths';
import Logout from './components/Logout/Logout';

function App() {
  const [auth,setAuth] = useState(() => {
    localStorage.removeItem('accessToken');
    return {}
  });
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
    isAuthenticated: !!auth.accessToken
  }

  return (
    <AuthContext.Provider value={values}>
        <div id="box">
        <Header/>
        
          <Routes>
            <Route path={Path.Home} element={ <Home/> }/>
            <Route path="/games" element={<GameList/>}/>
            <Route path="/games/create" element={<GameCreate/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/games/:gameId" element={<GameDetails/>}/>
            <Route path={Path.Logout} element={<Logout/>}/>
          </Routes>
        </div>
    </AuthContext.Provider>
  )
}

export default App
