import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from  './components/Pessoa';
import Frase from  './components/Frase';
import List from  './components/List';


function App() {
  const nome = "Adelson"
  return (
    <div className="App">
    <Frase />
    <SayMyName nome="Luke" />
    <SayMyName nome={nome} />
    <Pessoa nome="Lima" idade="29" sexo="Masculino" profissao="Mecânico" foto="https://via.placeholder.com/250"  />
    <List />
    </div>
  );
}

export default App 
