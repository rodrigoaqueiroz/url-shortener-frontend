import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import NotFound from './components/NotFound/NotFound'
import Footer from './components/Footer/Footer'
import Shorten from './components/Shorten/Shorten'
import About from './components/About/About';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route path="/" element={<Navigate replace to="/home" />}/>
        <Route exact path="/shorten" element={<Shorten/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
