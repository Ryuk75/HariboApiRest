import React, {useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const options = [
    {
      name: '',
      scroll: true,
      backdrop: false,
    },
  ];
  
  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
  
    return (
      <>
        <Button variant="primary" onClick={toggleShow} className="me-2">
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Sidebar</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link eventKey="link-1" href="/FormEditUser">Editar Usuario</Nav.Link>
                <Nav.Link eventKey="link-2" href="/VistModProduccion">Modulo de Produccion</Nav.Link>
                <Nav.Link eventKey="disabled" href="/CrearOrdenProd"disabled>
                    Crear orden de producción
                </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  function Example() {
    return (
      <>
        {options.map((props, idx) => (
          <OffCanvasExample key={idx} {...props} />
        ))}
      </>
    );
  }
  

export default Example;