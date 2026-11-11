import './App.css';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import Registro from './paginas/Registro';
import Loguearse from './paginas/Loguearse';
import Home from './paginas/Home';
import logo from './ofertaDia.jpg';
import Rutas from './componentes/Rutas';
import Footer from './componentes/Footer';

function App() {
  return (
    <Router>
      <h1>Doña Antonia.srl</h1>
      <div className="App">
        <nav>
          <ul>
            <Link to="/" element={<Home />} class="list">
              Home
            </Link>
            <Link to="/registro" element={<Registro />} class="list">
              Registro
            </Link>
            <Link to="/loguearse" element={<Loguearse />} class="list">
              Loguearse
            </Link>
          </ul>
        </nav>
        <h2>Oferta del Día!!</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Rutas />
      <Footer />
    </Router>
  );
}

export default App;
