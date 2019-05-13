import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h1>G A L E R I A</h1>
        <Button href="/" class="mt-20" color="primary" size="lg" block>
          VOLVER
        </Button>
      </div>
    );
  }
}
export default Contact;
