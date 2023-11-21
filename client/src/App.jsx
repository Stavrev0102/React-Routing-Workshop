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

function App() {
  const [auth,setAuth] = useState({});
  const navigate = useNavigate();

  const loginSubmitHandler = async(values) => {
   const res = await authService.login(values.email,values.password);
   console.log(res);
   setAuth(res)
   navigate(Path.Home)
  }

  return (
    <AuthContext.Provider value={{loginSubmitHandler}}>
        <div id="box">
        <Header/>
        
          <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/games" element={<GameList/>}/>
            <Route path="/games/create" element={<GameCreate/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/games/:gameId" element={<GameDetails/>}/>
          </Routes>
        </div>
    </AuthContext.Provider>
  )
}

export default App
