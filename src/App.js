import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Subs from "./components/Subs";

const App = () => {
  return (
    <Container>
      <Row>
        <Col xs={4}>
          <Card style={{ height: "85%" }}>Offre utlisee</Card>
        </Col>
        <Col>
          <p>Abonnement en cours</p>
          <p>
            Offre : 20.000ar
            <br />
            Date debut d'abonnement : 22/02/2023
            <br />
            Date fin d'abonnement : 22/03/2023
          </p>
        </Col>
      </Row>
      <Subs />
    </Container>
  );
};

export default App;
