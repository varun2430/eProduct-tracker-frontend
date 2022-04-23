import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import NavBar from "./component/NavBar";
import Home from "./page/Home";
import Search from './page/Search';
import Tracker from "./page/Tracker";

function App() {
  return (
    <>
      
      <BrowserRouter>

        <NavBar />

          <Routes>

            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/search" element={ <Search /> } />
            <Route exact path="/tracker" element={ <Tracker /> } />

          </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
