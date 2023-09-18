import Card from "./Componentes/Card/card";
import Sidebar from "./Componentes/Sidebar/sidebar";
import "./index.css";

function App() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="container-card">
          <h1>Meu Kanban</h1>
          <div className="cards-board">
            <div className="board">
              <h2>A fazer</h2>
              <Card title="Tarefa #1" desc="Fazer esta tarefa" />
            </div>
            <div className="board">
              <h2>Fazendo</h2>
              <Card title="Tarefa #2" desc="Fazendo esta tarefa" />
            </div>
            <div className="board">
              <h2>Feito</h2>
              <Card title="Tarefa #3" desc="Tarefa concluída" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
