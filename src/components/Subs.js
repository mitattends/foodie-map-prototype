import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Subs = () => {
  const elements = [];
  for (let i = 0; i < 3; i++) {
    elements.push(
      <Col>
        <Card style={{ height: "140%", padding: "5%" }}>
          <Card style={{ padding: "12%" }}>Abonnement premium</Card>
          <p style={{ textAlign: "center", position: "relative", top: "30%" }}>
            Fonctionnalites : Acceder a vos statistiques de tableau de bord
          </p>
        </Card>
      </Col>
    );
  }
  return <Row>{elements}</Row>;
};

export default Subs;
