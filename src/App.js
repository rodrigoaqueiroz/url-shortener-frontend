import './App.css';

import { BrowserRouter as Router, Navigate,Route, Routes } from 'react-router-dom'

import About from './components/About/About';
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import NotFound from './components/NotFound/NotFound'
import Shorten from './components/Shorten/Shorten'

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
