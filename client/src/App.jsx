import GameList from "./components/Game-List/GameList";
import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import { Routes,Route } from 'react-router-dom';

function App() {

  return (
    <div id="box">

     <Header/>

      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/games" element={<GameList/>}/>
      </Routes>

    </div>
  )
}

export default App
