import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Card
} from 'reactstrap';

class House extends Component {
  render() {
    return (
      <div class="mt-4">
        <h1 class="text-center">I N I C I O</h1>
        <br />
        <div class="d-flex justify-content-center align-items card text-center">
          <Card>
            <Form>
              <FormGroup>
                <Label for="Email" sm={2}>
                  Correo Electrónico
                </Label>
                <input type="email" name="email" id="email" />
              </FormGroup>
              <FormGroup>
                <Label for="Password" sm={2}>
                  Contraseña
                </Label>
                <input type="Password" />
              </FormGroup>
            </Form>
            <Button type="button" class="btn btn-secondary" size="lg">
              INICIAR SESIÓN
            </Button>
          </Card>
        </div>
        <br />

        <Button href="/" class="mt-20" color="primary" size="lg" block>
          VOLVER
        </Button>
      </div>
    );
  }
}
export default House;
