import React from 'react';
import Login from './components/authCliente/Login';
import AuthClienteState from './context/authCliente/authClienteState';

function App() {
  return (
    <div className="App">
        <AuthClienteState>
          <Login/>            
        </AuthClienteState>               
    </div>
  );
}

export default App;
