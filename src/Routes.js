import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Inicio from './Vistas/Inicio';
import Registro from './Vistas/Registro';
import Galeria from './Vistas/Galeria';
import Page404 from './Vistas/Page404';
import Navegacion from './Vistas/Navegacion';

const AppRouters = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Navegacion} />
      <Route exact path="/inicio" component={Inicio} />
      <Route exact path="/registro" component={Registro} />
      <Route exact path="/galeria" component={Galeria} />
      <Route exact component={Page404} />
    </Switch>
  </App>
);
export default AppRouters;
