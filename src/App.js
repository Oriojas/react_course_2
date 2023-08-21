import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  const user = {
    nombre: "Oscar Riojas",
    edad: 26,
    color: "Azul",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user}></Saludar>
      </header>
    </div>
  );
}

export default App;
