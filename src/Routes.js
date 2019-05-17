import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Inicio from './Vistas/Inicio';
import Registro from './Vistas/Registro';
import Tabla1 from './Vistas/Tabla1';
import Page404 from './Vistas/Page404';
import Navegacion from './Vistas/Navegacion';
import Tabla2 from './Vistas/Tabla2';
import tbltest from './Vistas/TblTest';

const AppRouters = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Navegacion} />
      <Route exact path="/inicio" component={Inicio} />
      <Route exact path="/registro" component={Registro} />
      <Route exact path="/tabla1" component={Tabla1} />
      <Route exact path="/tabla2" component={Tabla2} />
      <Route exact path="/tabla3" component={tbltest} />
      <Route exact component={Page404} />
    </Switch>
  </App>
);
export default AppRouters;
