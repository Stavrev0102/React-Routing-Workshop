import GameCreate from "./components/Game-Create/GameCreate";
import GameList from "./components/Game-List/GameList";
import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import { Routes,Route } from 'react-router-dom';
import Login from "./components/Login/Login";

function App() {

  return (
    <div id="box">

     <Header/>

      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/games" element={<GameList/>}/>
        <Route path="/games/create" element={<GameCreate/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </div>
  )
}

export default App
