import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Skill from "./pages/Skill";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact/*" element={<Contact />} />
          <Route path="service/*" element={<Service />} />
          <Route path="skill/*" element={<Skill />} />
          <Route path="about/*" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
