import "./App.css";

import Card from "./components/Card";
import Intervalo from "./components/Intervalo";

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Card title="Card 02" green>X</Card>
        <Card title="Card 03" blue>Y</Card>
        <Card title="Card 04" purple>Y</Card>
      </div>
    </div>
  );
}

export default App;
