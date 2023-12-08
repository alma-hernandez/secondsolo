import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';

// From Michael: If you use export components, you can import all of these from the components folder, which makes this look a little nicer.
import Home from './components/Home';
import AboutAlma from './components/AboutAlma';
import AboutMichael from './components/AboutMichael';
import AboutBabyDuffey from './components/AboutBabyDuffey';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } ></Route>
        <Route path="/AboutMichael" element={ <AboutMichael /> } ></Route>
        <Route path="/AboutAlma" element={ <AboutAlma /> } ></Route>
        <Route path="AboutBabyDuffey" element={ <AboutBabyDuffey /> } ></Route>
      </Routes>
      
    </div>
  );
}

export default App;
