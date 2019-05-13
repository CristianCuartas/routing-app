import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import Contenido from './contenido';
import Navegacion from './Vistas/Navegacion';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Contenido body={children} />
      </div>
    );
  }
}

export default App;
