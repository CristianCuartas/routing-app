import React, { Component } from 'react';
import { Table, Card, Button } from 'reactstrap';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import '../../css/styleTable1.css';

class Example2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  Mapping = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  };

  componentDidMount() {
    this.Mapping();
  }

  render() {
    const aux = this.state.items.map((obj, idx) => {
      return (
        <tr key={idx} value={obj.id}>
          <td scope="col"> {obj.id} </td>
          <td scope="col">{obj.name}</td>
          <td scope="col">{obj.username}</td>
          <td scope="col">{obj.email}</td>
        </tr>
      );
    });
    console.log('Valores cargados');
    return (
      <div className="tabla ">
        <div className="mt-4">
          <h1 className="text-center">U S U A R I O S</h1>
          <br />
          <div className="d-flex justify-content-center align-items">
            <div className="row d-flex justify-content-center">
              <div className="text-center">
                <Table striped dark className="tableMap">
                  <thead className="thead-light">
                    <tr>
                      <th scope="row">Id</th>
                      <th scope="row">Nombre</th>
                      <th scope="row">Username</th>
                      <th scope="row">Email</th>
                    </tr>
                  </thead>
                  <tbody>{aux}</tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
        <br />
        <Button href="/" className="mt-20" color="primary" size="lg" block>
          VOLVER
        </Button>
      </div>
    );
  }
}
export default Example2;
