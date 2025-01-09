import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col lg={1}>
        <img
          width={40}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg"
        />
      </Col>
      <Col lg={11}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
