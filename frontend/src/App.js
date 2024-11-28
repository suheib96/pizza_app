import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Karte from './components/Karte';
import Bestellungen from './components/Bestellungen';
import Zutaten from './components/Zutaten';
import Navbar from './components/Navbar';

function App() {
  return (
<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/karte" element={<Karte />} />
    <Route path="/zutaten" element={<Zutaten />} />
    <Route path="/bestellungen" element={<Bestellungen />} />
  </Routes>
</Router>
  );
}

export default App;
