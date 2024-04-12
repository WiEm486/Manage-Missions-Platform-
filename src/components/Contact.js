import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export const Contact = () => {
  return (
    <section id="contact" className="block contact-block">
      <div className="title-holder">
        <h2>Contact Us</h2>
        <div className="subtitle"> Fill this form to get in touch with us </div>
        <Container className="d-flex justify-content-center flex-column">
          <Row>
            <Col sm={4}>
              <Form.Control
                placeholder="Enter your First Name"
                required
              ></Form.Control>
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your Email"
                required
              ></Form.Control>
            </Col>
            <Col sm={4}>
              <Form.Control
                placeholder="Last Name"
                type="tel"
                required
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "10rem" }}
              ></Form.Control>
            </Col>
          </Row>
        </Container>

        <Button type="submit" className="btn_holder">
          Submit
        </Button>

        <div>
          <iframe
            className="google-map"
            title="google"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.2914525959736!2d10.588601476864087!3d35.81732427254363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8aebd089045d%3A0xf1d2903fb4b9c9d3!2sEnova%20Robotics!5e0!3m2!1sfr!2stn!4v1688457525951!5m2!1sfr!2stn"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
