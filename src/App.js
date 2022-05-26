
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import  'bootstrap/dist/js/bootstrap.bundle.js.map'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addstud from './component/Addstud';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/"  exact element={<Addstud/>}/>
    </Routes>
    
    </BrowserRouter>
    
    
    
    </>

  
    
  );
}

export default App;
