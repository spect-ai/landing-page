import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <div className="h-full">
      <Navbar />
      <div className="mt-48 mx-auto text-6xl text-semibold text-center">
        <h1>For the buidlers of Web3</h1>
      </div>
    </div>
  );
}

export default HeroSection;