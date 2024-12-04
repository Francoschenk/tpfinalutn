import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CiudadesRecomendadas.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Hcarousel from '../Hcaroussel/Hcaroussel';
import { useState } from 'react';

function RowColLayoutColWidthBreakpointExample() {
  return (
    <Container>
      <Row md={4}>
        <Col>
        1 of 3
        </Col>
        <Col xs={6}>
        2 of 3
        </Col>
        <Col>
        3 of 3
        </Col>
      </Row>
    </Container>
  );
}


function Cartas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [count, setCount] = useState(0)
  
  const [disabled, setDisabled] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [desactivador, setDesactivador] = useState(false);
  const [activador, setActivador] = useState(true);
  const [ario, setArio] = useState(false);
  const [brio, setBrio] = useState(true);
  const [anewyork, setAnewyork] = useState(false);
  const [bnewyork, setBnewyork] = useState(true);
  const [abarcelona, setAbarcelona] = useState(false);
  const [bbarcelona, setBbarcelona] = useState(true);
  const [atokyo, setAtokyo] = useState(false);
  const [btokyo, setBtokyo] = useState(true);
  const [asydney, setAsydney] = useState(false);
  const [bsydney, setBsydney] = useState(true);

  function handleGameClick() {
    setDesactivador(!disabled);
    setActivador(!enabled);
  }
  function handleGameClic() {
    setDesactivador(!enabled);
    setActivador(!disabled);
  }



  const rio=1700;
  const paris=1850;
  const newyork=2500;

  const barcelona=2850;
  const tokyo=3400;
  const sydney=3000;

  const handleClick = (className) => {
      setDisabled(true);
      // enabled=true;
      setActivador(false);
      const rr=document.getElementsByClassName(className);
      () => setCount((count) => count+45)
      
  };
  const handleClic = (className) => {
      
    setEnabled(true);
    setDisabled(false);
    const rr=document.getElementsByClassName(className);
    () => setCount((count) => count+45)
  };
  
  // const desactiv = (className) => {
  //   () => setCount((count) => count+45)
  //   const rr=document.getElementsByClassName(className);
  //   rr.disabled;
  //   className.disabled;
  // };
  
  return (
    <>
      <div className="cartas">
        {/* París */}
        <Card className="cartas1" style={{ width: "100%" }}>
          <Card.Img
            variant="top"
            src="https://t4.ftcdn.net/jpg/02/96/15/35/360_F_296153501_B34baBHDkFXbl5RmzxpiOumF4LHGCvAE.jpg"
          />
          <Card.Body>
            <Card.Title>Paris</Card.Title>
            <Card.Text>
              París, la ciudad del amor, destaca por su historia, arquitectura
              impresionante y vibrante vida cultural.
            </Card.Text>
            <Form.Group className="m3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Reseña de viaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="formulario-control"
                disabled={desactivador}
              />
            </Form.Group>
            <button
              className="separar botones"
              disabled={desactivador}
              onClick={handleGameClick}
            >
              Terminé de escribir mi reseña
            </button>
            <button
              className="separar botones"
              onClick={handleGameClic}
              disabled={activador}
            >
              Modificar reseña
            </button>
            <Button
              className="separar botones"
              variant="primary"
              onClick={() => {
                setCount((count) => count + paris);
                setEnabled(false);
                setDisabled(true);
              }}
              disabled={disabled}
            >
              valor de viaje ${paris}
            </Button>
            <Button
              className="separar botones"
              variant="primary"
              onClick={() => {
                setCount((count) => count - paris);
                setDisabled(false);
                setEnabled(true);
              }}
              disabled={enabled}
            >
              cancelar viaje
            </Button>
            <p>total de viajes ${count}</p>
          </Card.Body>
        </Card>
  
        {/* Río de Janeiro */}
        <Card className="cartas2" style={{ width: "100%" }}>
          <Card.Img
            variant="top"
            src="https://www.cronista.com/files/image/302/302492/5ffe1e5aec0ab.webp?oe=jpg"
          />
          <Card.Body>
            <Card.Title>Río de Janeiro</Card.Title>
            <Card.Text>
              Río de Janeiro, vibrante y festivo, destaca por sus playas icónicas,
              el Cristo Redentor y el Carnaval.
            </Card.Text>
            <Form.Group className="m3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Reseña de viaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="formulario-control"
                disabled={desactivador}
              />
            </Form.Group>
            <button
              className="separar botones"
              disabled={desactivador}
              onClick={handleGameClick}
            >
              Terminé de escribir mi reseña
            </button>
            <button
              className="separar botones"
              onClick={handleGameClic}
              disabled={activador}
            >
              Modificar reseña
            </button>
            <Button
              className="separar botones"
              variant="primary"
              onClick={() => {
                setCount((count) => count + rio);
                setArio(true);
                setBrio(false);
              }}
              disabled={ario}
            >
              valor de viaje ${rio}
            </Button>
            <Button
              className="separar botones"
              variant="primary"
              onClick={() => {
                setCount((count) => count - rio);
                setArio(false);
                setBrio(true);
              }}
              disabled={brio}
            >
              cancelar viaje
            </Button>
            <p>total de viajes ${count}</p>
          </Card.Body>
        </Card>
  
        {/* New York */}
        <Card className="cartas3" style={{ width: "100%" }}>
          <Card.Img
            variant="top"
            src="https://www.state.gov/wp-content/uploads/2022/01/shutterstock_248799484-scaled.jpg"
          />
          <Card.Body>
            <Card.Title>New York</Card.Title>
            <Card.Text>
              Nueva York, bulliciosa y diversa, ofrece rascacielos icónicos,
              cultura vibrante y una energía única.
            </Card.Text>
            <Form.Group className="m3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Reseña de viaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="formulario-control"
                disabled={desactivador}
              />
            </Form.Group>
            <button
              className="separar botones"
              disabled={desactivador}
              onClick={handleGameClick}
            >
              Terminé de escribir mi reseña
            </button>
            <button
              className="separar botones"
              onClick={handleGameClic}
              disabled={activador}
            >
              Modificar reseña
            </button>
            <Button
              className="separar botones"
              variant="primary"
              onClick={() => {
                setCount((count) => count + newyork);
                setBnewyork(false);
                setAnewyork(true);
              }}
              disabled={anewyork}
            >
              valor de viaje ${newyork}
            </Button>
            <Button
              className="separar botones"
              variant="primary"
              onClick={() => {
                setCount((count) => count - newyork);
                setAnewyork(false);
                setBnewyork(true);
              }}
              disabled={bnewyork}
            >
              cancelar viaje
            </Button>
            <p>total de viajes ${count}</p>
          </Card.Body>
        </Card>
  
        {/* Repite para Barcelona, Tokyo y Sydney */}
      </div>
    </>
  );
}

export default Cartas;