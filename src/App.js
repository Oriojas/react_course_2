import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Contacto from "./pages/Contacto";
import QuienSoy from "./pages/QuienSoy";

function App() {
  return (
    <div className="App">
      <h2>UserState</h2>
      <Router>
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/Contacto">
            <button>Contacto</button>
          </Link>
          <Link to="/QuienSoy">
            <button>Quien Soy</button>
          </Link>
        </div>
        <Routes>
          <Route path="Contacto" element={<Contacto></Contacto>}></Route>
          <Route path="QuienSoy" element={<QuienSoy></QuienSoy>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
