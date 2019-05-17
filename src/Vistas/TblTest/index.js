import React, { Component } from 'react';
import { TableHeaderColumn, BootstrapTable } from 'react-bootstrap-table';
import { Row, Col, Button } from 'reactstrap';
import '../../css/styleTable3.css';

const data = [
  {
    id: 1,
    codigo: 'CG1',
    nombre: 'Conglomerado1',
    descripcion: 'descripcion del conglomerado',
    estado: true
  },
  {
    id: 2,
    codigo: 'CG2',
    nombre: 'Conglomerado 2',
    descripcion: 'descripcion del conglomerado',
    estado: false
  },
  {
    id: 3,
    codigo: 'CG3',
    nombre: 'Conglomerado 3',
    descripcion: 'descripcion del conglomerado',
    estado: true
  }
];

class tbltest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="table-reponsive">
        <Row>
          <Col md="12">
            <div className="table-conglomerado">
              <BootstrapTable
                data={data}
                hover
                striped
                bordered={false}
                className="tabletst"
              >
                <TableHeaderColumn
                  dataSort={true}
                  isKey
                  dataField={'id'}
                  width={'60'}
                  dataAlign="center"
                >
                  #
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataSort={true}
                  dataField={'codigo'}
                  dataAlign="center"
                >
                  {' '}
                  Código{' '}
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataSort={true}
                  dataField={'nombre'}
                  dataAlign="center"
                >
                  Nombre
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataSort={true}
                  dataField={'descripcion'}
                  dataAlign="center"
                >
                  Descripción
                </TableHeaderColumn>
              </BootstrapTable>
              <br />
              <Button
                href="/"
                className="mt-20"
                color="primary"
                size="lg"
                block
              >
                VOLVER
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default tbltest;
