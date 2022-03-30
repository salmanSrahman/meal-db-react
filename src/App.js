import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Meals from "./Components/Meals/Meals";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/CommonPart/Footer/Footer";
import Header from "./Components/CommonPart/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="meals" element={<Meals />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="footer" element={<Footer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
