import './App.css';
import OutraLista from './components/OutraLista';



function App() {

  const disciplinas = ['Matematica', 'Português','Inglês']
  return (
    <div className="App">
      <h1>Renderização de Listas!</h1>
      <OutraLista itens={disciplinas} />
      <OutraLista itens={[]} />
      

    
    </div>
  );
}

export default App 
