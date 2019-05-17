import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Toast, ToastBody } from 'reactstrap';

class Navegacion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // row justify-content-center
  render() {
    return (
      <div className="justify-content-center">
        <div className="">
          <div className="bg-info rounded d-flex justify-content-center align-items">
            <Toast>
              <Nav>
                <NavLink href="#inicio">I N I C I O</NavLink>{' '}
                <NavLink href="#registro">R E G I S T R O </NavLink>{' '}
                <NavLink href="#tabla1">T A B L A 1</NavLink>{' '}
                <NavLink href="#tabla2">T A B L A 2</NavLink>{' '}
                <NavLink href="#tabla3">T A B L A 3</NavLink>{' '}
              </Nav>
            </Toast>
          </div>
        </div>
      </div>
    );
  }
}
export default Navegacion;
