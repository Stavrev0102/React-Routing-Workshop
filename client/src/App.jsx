/* eslint-disable no-unused-vars */
import GameCreate from "./components/Game-Create/GameCreate";
import GameList from "./components/Game-List/GameList";
import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import { Routes,Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GameDetails from "./components/Game-Details/GameDetails";
import { useState } from "react";

function App() {
  const [auth,setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  }

  return (
    <div id="box">

     <Header/>
    
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/games" element={<GameList/>}/>
        <Route path="/games/create" element={<GameCreate/>}/>
        <Route path="/login" element={<Login loginSubmitHandler={loginSubmitHandler}/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/games/:gameId" element={<GameDetails/>}/>
      </Routes>

    </div>
  )
}

export default App
