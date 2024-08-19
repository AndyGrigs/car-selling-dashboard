import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CarList from './components/CarList';

function App() {
  return (
    
    
    <Router>
      <CarList/>
      <div>
      {/* 
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav> */}

        {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes> */}
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

export default App;