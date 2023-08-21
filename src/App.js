import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar name="Oscar Riojas" age="44"></Saludar>
        <Saludar name="Angelica Riojas" age="16"></Saludar>
      </header>
    </div>
  );
}

export default App;
