import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InicioCliente from './components/usuarios/InicioCliente';
import InicioDuenio from './components/usuarios/InicioDuenio';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cliente" component={InicioCliente} />
        <Route path="/duenio" component={InicioDuenio} />
      </Switch>
    </Router>
  );
}

export default App;
