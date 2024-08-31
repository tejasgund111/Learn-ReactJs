import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen  bg-slate-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>

        <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/about" element={<h1 className='flex justify-center items-center text-slate-100 text-3xl h-full'>About</h1>} />
        <Route path="/contact" element={<h1 className='flex justify-center items-center text-slate-100 text-3xl h-full'>Contact</h1>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard />} />
       

      </Routes>
    </div>
  );
}

export default App;
