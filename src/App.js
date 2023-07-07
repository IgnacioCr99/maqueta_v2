import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar'
import { Sidemenu } from './Components/Sidemenu/sidemenu';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import { fecha_vencimiento } from './Pages/fecha_vencimiento';
import { home } from './Pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Sidemenu/>
      <Routes>
        <Route path="/fecha_vencimiento" element={<fecha_vencimiento/>}/>
        <Route path="/" element={<home/>}/>
      </Routes> 
      </Router>
    </div>
  );
}

export default App;
