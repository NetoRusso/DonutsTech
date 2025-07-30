import "./App.css";
import Banner from "./Banner";
import Contatos from "./Contatos";
import Menu from "./Menu";
import Sobre from "./Sobre";
import Solucoes from "./Solucoes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Linktree from "./Linktree/Linktree";

function App() {
  console.log(
    "Olá amigo DeV. que bom te ver por aqui, gostou do que viu? Ficou com alguma duvida? Qualquer coisa entre em contato que podemos te oferecer uma consultoria🍩"
  );
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <header className="App-header">
                <Banner />
                <Menu />
                <Sobre />
                <Solucoes />
                <Contatos />
              </header>
            </div>
          }
        />

        <Route path="/linktree" element={<Linktree />} />
      </Routes>
    </Router>
  );
}

export default App;
