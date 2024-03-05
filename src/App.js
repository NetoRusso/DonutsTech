import './App.css';
import Banner from './Banner';
import Contatos from './Contatos';
// import Menu from './Menu';
import Sobre from './Sobre';
import Solucoes from './Solucoes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Banner />
      {/* <Menu /> */}
      <Sobre />
      <Solucoes />
      <Contatos />
      </header>
    </div>
  );
}

export default App;
