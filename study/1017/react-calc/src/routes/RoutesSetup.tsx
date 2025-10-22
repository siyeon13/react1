import { Route, Routes } from "react-router-dom";
import Calc from "../pages/Calc";
import Home from "../pages/Home";
import About from "../pages/About";

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Calc />} />
      <Route path="/calc" element={<Calc title="Calcurator!!!" />} />
      <Route path="/home" element={<Home title="Home 🏡" />} />
      <Route path="/about" element={<About title="About" />} />
    </Routes>
  );
}
