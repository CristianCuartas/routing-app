import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      pais: 'Estados Unidos',
      FNacimiento: '',
      checkbox: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClean = this.handleClean.bind(this);
  }

  handleClean(e) {
    const msg = alert('Su registro fue exitoso');
    // const { name } = this.state;
    // const { password } = this.state;
    // const { pais } = this.state;
    // const { FNacimiento } = this.state;
    // const { checkbox } = this.state;
  }

  cleanFields = () => {
    this.setState({
      email: '',
      password: '',
      pais: 'Estados Unidos',
      FNacimiento: '',
      checkbox: false
    });
  };

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({ [name]: value });
  }

  onSendInformation(e) {
    e.preventDefault();

    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.pais);
    console.log(this.state.FNacimiento);
    console.log(this.state.checkbox);

    // this.cleanFields();
  }

  render() {
    let formValid = false;
    if (
      this.state.email &&
      this.state.password &&
      this.state.FNacimiento !== '' &&
      this.state.checkbox !== false
    ) {
      console.log('Prueba');
      formValid = true;
    } else {
      formValid = false;
      console.log('PruebaElse');
    }

    return (
      <div className="mt-4">
        <h1 className="text-center">R E G I S T R O</h1>
        <div className="d-flex justify-content-center align-items">
          <Card style={{ width: 800 }}>
            <CardBody>
              <Form
                id="form"
                onSubmit={e => {
                  this.onSendInformation(e);
                  this.handleClean(e);
                }}
              >
                <FormGroup>
                  <Label for="Email" sm={3}>
                    Correo Electrónico{' '}
                  </Label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@example.com"
                    value={this.state.email}
                    onChange={e => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Password" sm={3}>
                    Contraseña
                  </Label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={e => {
                      this.setState({ password: e.target.value });
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Select" sm={3}>
                    País
                  </Label>
                  <select
                    type="select"
                    name="select"
                    id="select"
                    value={this.state.pais}
                    onChange={e => {
                      this.setState({ pais: e.target.value });
                    }}
                  >
                    <option>Estados Unidos</option>
                    <option>República popular China</option>
                    <option>Japón</option>
                    <option>Union Europea</option>
                    <option>India</option>
                    <option>Canadá</option>
                    <option>Reino Unido</option>
                    <option>Corea del Sur</option>
                    <option>México</option>
                    <option>Asia Central</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  <Label for="Date" sm={3}>
                    Fecha de nacimiento
                  </Label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={this.state.FNacimiento}
                    onChange={e => {
                      this.setState({ FNacimiento: e.target.value });
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="checkbox" sm={3}>
                    Es mayor de 18 años
                  </Label>
                  <label>
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      checked={this.state.chechbox}
                      onChange={this.handleInputChange}
                    />
                    Sí
                  </label>
                </FormGroup>
                <br />

                {formValid ? (
                  <Button
                    type="submit"
                    className="mt-20"
                    color="success"
                    size="lg"
                    block
                  >
                    REGISTRARSE
                  </Button>
                ) : (
                  <Button
                    type="button"
                    className="mt-20"
                    color="secondary"
                    size="lg"
                    block
                    disabled
                  >
                    REGISTRARSE
                  </Button>
                )}
                <Button
                  type="button"
                  className="mt-20"
                  color="warning"
                  size="lg"
                  block
                  onClick={() => this.cleanFields()}
                >
                  CANCELAR
                </Button>
              </Form>
            </CardBody>
          </Card>
        </div>
        <br />
        <Button href="/" className="mt-20" color="primary" size="lg" block>
          VOLVER
        </Button>
      </div>
    );
  }
}
export default About;
