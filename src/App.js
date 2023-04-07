import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Todos from "./pages/Todos";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todos/*" element={<Todos />} />
          <Route path="about/*" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
