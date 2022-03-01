import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from './pages/Menu';
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/menu" element={<Menu/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
