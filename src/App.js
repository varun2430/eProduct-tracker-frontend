import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./component/NavBar";
import Home from "./page/Home";
import Tracker from "./page/Tracker";
import Deals from "./page/Deals";

function App() {
  return (
    <>
      
      <BrowserRouter>

        <NavBar />

          <Routes>

            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/tracker" element={ <Tracker /> } />
            <Route exact path="/deals" element={ < Deals /> } />

          </Routes>

      </BrowserRouter>

      {/* <Home /> */}

      {/* <Deals /> */}

      {/* <Tracker /> */}

    </>
  );
}

export default App;
