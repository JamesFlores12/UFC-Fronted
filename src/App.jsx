import React from 'react';
import { createRoot } from 'react-dom';
import './App.css'
//import Login from './views/Login';
import Registro from './views/Registro';

function App() {
  const root = createRoot(document.getElementById('root'));
  root.render(<Registro />);
    <React.StrictMode>
      <Registro /> 
    </React.StrictMode>,
    document.getElementById('root')
}

export default App
