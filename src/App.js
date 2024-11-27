import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {
  const nome = "Adelson"
  return (
    <div className="App">
    <SayMyName nome="Luke" />
    <SayMyName nome="Biorn" />
    <SayMyName nome={nome} />
    <Pessoa nome="Lima" idade="29" sexo="Masculino" profissao="Mecânico" foto="https://www.flaticon.com/free-icon/profile_3135715"  />
 
    </div>
  );
}

export default App 
