import React from "react";
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Table from 'react-bootstrap/Table'
import '../components/css/style.css'
import {Form, Row, Col, Button, Nav} from 'react-bootstrap'

function VistModProduccion(){

    return(
        <div className="container">
            <NavBar/>
            <div>
                <Row>
                    <Col md={5}>
                        <Form.Group className="mb-3">
                            <Form.Label for="idOrden">ID Orden:</Form.Label>
                            <Form.Control type="number" name="IDOrden" id="idOrden" placeholder="# ID Order"/> 
                        </Form.Group>
                    </Col>
                    <Col md={5}>
                        <Form.Group className="mb-3">
                            <Form.Label for="idOrden">Descripcion:</Form.Label>
                            <Form.Control type="text" name="Descripcion" id="descripcion" placeholder="Description"/> 
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                    <Form.Group className="mb-3 py-3 my-4">
                        <Button as="input" type="submit" value="Buscar" size="lg" />{' '}
                    </Form.Group>
                    </Col>
                </Row>
            </div>
            <Table responsive striped bordered hover>
            <thead>
                <tr>
                <th># Orden</th>
                <th>Descripcion</th>
                <th>Status Inventario</th>
                <th>Fecha de Produccion</th>
                <th>Acciones</th>
                <th>Despachado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>001</td>
                {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Orden de Produccion #  {index}</td>
                ))}
                <td><Form.Check type="checkbox" inline isValid/></td>
                </tr>
                <tr>
                <td>002</td>
                {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Orden de Produccion # {index}</td>
                ))}
                <td><Form.Check type="checkbox" inline isValid/></td>
                </tr>
                <tr>
                <td>003</td>
                {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Orden de Produccion # {index}</td>
                ))}
                <td><Form.Check type="checkbox" inline isValid/></td>
                </tr>
                <tr>
                <td>004</td>
                {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Orden de Produccion #  {index}</td>
                ))}
                <td><Form.Check type="checkbox" inline isValid/></td>
                </tr>
                <tr>
                <td>005</td>
                {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Orden de Produccion #  {index}</td>
                ))}
                <td><Form.Check type="checkbox" inline isValid/></td>
                </tr>
                <tr>
                <td>006</td>
                {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Orden de Produccion #  {index}</td>
                ))}
                <td><Form.Check type="checkbox" inline isValid/></td>
                </tr>
                <tr>
                <td>007</td>
                {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Orden de Produccion #  {index}</td>
                ))}
                <td><Form.Check type="checkbox" inline isValid/></td>
                </tr>
                <tr>
                <td>008</td>
                {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Orden de Produccion #  {index}</td>
                ))}
                <td><Form.Check type="checkbox" inline isValid/></td>
                </tr>
                <tr>
                <td>009</td>
                {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Orden de Produccion #  {index}</td>
                ))}
                <td><Form.Check type="checkbox" inline isValid/></td>
                </tr>
                <tr>
                <td>010</td>
                {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Orden de Produccion #  {index}</td>
                ))}
                <td><Form.Check type="checkbox" inline isValid/></td>
                </tr>
            </tbody>
            </Table>
            <div className="mb-2 flex-wrap justify-content-between align-items-center py-3 my-4">    
            <Button variant="primary" size="lg">
            <Nav.Link eventKey="link-2" href="/CrearOrdenProd" justify id="buttonName"> 
            Nueva orden de Produccion
            </Nav.Link>
            </Button>{' '}
            <Button variant="secondary" size="lg">
            <Nav.Link eventKey="link-2" href="/GenerarReporte" id="buttonName">
            Generar Reporte
            </Nav.Link>
            </Button>
            </div>
            <Footer/>
        </div>
    );
}
export default VistModProduccion;