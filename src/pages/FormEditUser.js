import React from "react";
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Form, Row, Col, Button} from "react-bootstrap";
//import  {useState} from "react";
function FormEditUser(){
/*
    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [age,setAge] = useState(0);
*/

    return(
        <div class="container">
        <NavBar/>
        <main>
            <div class="container">
                <form>
                    <h1>Editar datos del usuario</h1>
                    <Row className="g-2">
                        <Col md>
                        <Form.Group className="mb-3">
                            <Form.Label for="name">Nombres</Form.Label>
                            <Form.Control type="text" name="name" id="name" placeholder="Name"/> 
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label for="email">Email</Form.Label>
                            <Form.Control type="email" name="Email" id="email" placeholder="Email"/> 
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label for="city">Ciudad</Form.Label>
                            <Form.Control type="text" name="City" id="city" placeholder="City" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label for="password">Contraseña</Form.Label>
                            <Form.Control type="password" name="password" id="password" placeholder="Password"/>
                        </Form.Group>
                        </Col>
                        <Col md>
                        <Form.Group className="mb-3">
                            <Form.Label for="lastname">Apellidos</Form.Label>
                            <Form.Control type="text" name="last name" id="lastname" placeholder="Last Name"/> 
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label for="cc">Cédula</Form.Label>
                            <Form.Control type="number" name="CC" id="cc" placeholder="CC"/> 
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label for="phonenumber">Numero télefonico</Form.Label>
                            <Form.Control type="number" name="phonenumber" id="phoneNumber" placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group className="mb-3"> 
                            <Form.Label for="password">Confirmar contraseña</Form.Label>
                            <Form.Control type="password" name="password" id="password" placeholder="Confirm password"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <legend>Género</legend>
                            {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Hombre"
                                name="group1"
                                type={type}
                                id={`inline-${type}-hombre`}
                                isValid
                            />
                            <Form.Check
                                inline
                                label="Mujer"
                                name="group1"
                                type={type}
                                id={`inline-${type}-mujer`}
                                isValid
                            />
                            </div>
                        ))}
                        </Form.Group>
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Informacion de Protección de datos:</Form.Label>
                        <Form.Check type="checkbox" label="He leido y aceptado la politica de privacidad." />
                    </Form.Group>
                </form>
            </div>
            <div className="mb-2">
                <Button variant="primary" size="lg">
                Guardar Cambios
                </Button>{' '}
                <Button variant="secondary" size="lg">
                Deshabilitar usuario
                </Button>
            </div>
        </main>
        <Footer/>
        </div>       
    )
}
export default FormEditUser;