import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import "./styles.css";

import { About } from "./Pages/About";
import { Home } from "./Pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes path="/">
        <Route index path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
