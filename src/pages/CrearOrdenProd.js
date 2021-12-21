import React from "react";
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Table from 'react-bootstrap/Table'
import { Row, Col, Button, Nav} from 'react-bootstrap'

function CrearOrdenProd(){
    return(
        <div className="container">
            <NavBar/>
            <h2 className="titulos">Orden de producción #001</h2>
            <div className="flex-container mb-3">
            <Table striped bordered hover variant="dark" responsive="xs">
            <thead>
            <tr>
                <th>Item</th>
                <th>ID</th>
                <th>Nombre</th>
                <th>Cantidad Requerida</th>
                <th>Unidad</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>001</td>
                <td>Azúcar</td>
                <td>5</td>
                <td>gr</td>
                <td>Disponible</td>
            </tr>
            <tr>
                <td>2</td>
                <td>002</td>
                <td>Cafe</td>
                <td>15</td>
                <td>lb</td>
                <td>Cantidad insuficiente</td>
            </tr>
            <tr>
                <td>3</td>
                <td>003</td>
                <td>Aceite</td>
                <td>2</td>
                <td>ml</td>
                <td>Disponible</td>
            </tr>
            <tr>
                <td>4</td>
                <td>004</td>
                <td>Chocolate</td>
                <td>3</td>
                <td>gr</td>
                <td>Disponible</td>
            </tr>
            <tr>
                <td>5</td>
                <td>005</td>
                <td>Trigo</td>
                <td>10</td>
                <td>kg</td>
                <td>Cantidad insuficiente</td>
            </tr>
            <tr>
                <td>6</td>
                <td>006</td>
                <td>Sal</td>
                <td>7</td>
                <td>gr</td>
                <td>Disponible</td>
            </tr>
            </tbody>
            </Table>
            <Row>
                <Col md={4}>
                    <Button variant="primary" size="lg">
                    <Nav.Link eventKey="link-2" href="/VerifDispInv" id="buttonName"> 
                    Verificar Disponibilidad en Inventario
                    </Nav.Link>
                    </Button>{' '}
                </Col>
                <Col md={4}>
                    <Button variant="primary" size="lg">
                    <Nav.Link eventKey="link-2" href="/GenerarOrden" id="buttonName">
                    Generar Orden
                    </Nav.Link>
                    </Button>
                </Col>
            </Row>
            </div>
            <Footer/>
        </div>
    );
}
export default CrearOrdenProd;