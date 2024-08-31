import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Support from './Components/Support';
import About from './Components/About';
import Labs from './Components/Labs';
import NotFound from './Components/NotFound';
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
            {/* <Link to="/labs">Labs</Link> */}
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
