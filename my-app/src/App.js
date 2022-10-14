import './App.css';
import Home from './Pages/Home';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import { Route, Routes } from "react-router-dom";
import Byte from './Pages/Byte';
import Contact from './Pages/Contact';


function App() {
  return (
    <div className="app">
      <Helmet>
        <meta charSet='utf-8' />
        <title>Byte.me</title> 
        <link rel="cannonical" href="localhost:3000/" />
        <meta name='description' content="Helment application" />
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Byte" element={<Byte />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
