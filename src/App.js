import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Empresa from "./pages/Empresa";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <NavBar /> 
      

      {/* Um <Routes> examina seus <Route>s filhos e
      renderiza o primeiro que corresponde ao URL actual. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </Router>
    
  );
}

export default App;
