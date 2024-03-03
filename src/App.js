import './App.css';
import Banner from './Banner';
import Sobre from './Sobre';
import Solucoes from './Solucoes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Banner />
      <Sobre />
      <Solucoes />
      </header>
    </div>
  );
}

export default App;
