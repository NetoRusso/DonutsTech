import './App.css';
import Banner from './Banner';
import Contatos from './Contatos';
import Menu from './Menu';
import Sobre from './Sobre';
import Solucoes from './Solucoes';

function App() {
  console.log('Olá amigo DeV. que bom te ver por aqui, gostou do que viu? Ficou com alguma duvida? Qualquer coisa entre em contato que podemos te oferecer uma consultoria🍩');
  return (
    <div className="App">
      <header className="App-header">
      <Banner />
      <Menu />
      <Sobre />
      <Solucoes />
      <Contatos />
      </header>
    </div>
  );
}

export default App;
