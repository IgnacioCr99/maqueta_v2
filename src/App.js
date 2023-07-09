import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar'
import { Sidemenu } from './Components/Sidemenu/sidemenu';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Fecha_vencimiento  from './Pages/fecha_vencimiento';
import {Home} from './Pages/Home';
import Comprobantes from './Pages/Comprobantes';
import Contratos from './Pages/Contratos';
import Saldo_en_custodia from './Pages/Saldo_en_custodia';
import pago_vcto from './Pages/pago_vcto';
function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Sidemenu/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/fecha_vencimiento" element={<Fecha_vencimiento/>}/>
          <Route path="/comprobantes" element={<Comprobantes/>}/>
          <Route path="/contratos" element={<Contratos/>}/>
          <Route path="/saldo_en_custodia" element={<Saldo_en_custodia/>}/>
          <Route path="/pago_vcto" element={<pago_vcto/>}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
