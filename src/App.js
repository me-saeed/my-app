///import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact.jsx";
import Services from "./Services";
import Login from "./Login";
import Navbar from "./Components/Navbar";
import Signup from "./Signup";
import Local from "./Local";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Services" element={<Local />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
