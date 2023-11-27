/* eslint-disable no-unused-vars */
import { Routes,Route} from 'react-router-dom';
import {AuthProvider} from "./contexts/authContext";

import GameCreate from "./components/Game-Create/GameCreate";
import GameList from "./components/Game-List/GameList";
import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GameDetails from "./components/Game-Details/GameDetails";
import Path from './paths';
import Logout from './components/Logout/Logout';
import GameEdit from './components/Game-Edit/GameEdit';

function App() {
  return (
    <AuthProvider >
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
            <Route path={Path.GameEdit} element={<GameEdit/>}/>
          </Routes>
        </div>
    </AuthProvider>
  )
}

export default App
