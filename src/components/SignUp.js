import img2 from "../assets/logoRobot.png";
import { Button, Col, Container, Form, Image, Nav, NavLink, Row } from "react-bootstrap";

export const SignUp = () => {
  return (
    <>
      <div className="image-container">
      
        <Image src={img2} className="centered-image"></Image>
      </div>
      <h1 style={{ textAlign: "center", fontFamily: "Montserrat Alternates" }}>
        Join Us
      </h1>
      <Container className="  d-flex justify-content-center flex-column align-items-center ">
        <Row>
          <Col sm={12}>
            <Form.Control
              type="email"
              placeholder="Enter your Email"
              className="p-20 mb-3 mt-4  input"
              required
            ></Form.Control>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Form.Control
              placeholder="Enter your Password"
              required
              type="password"
              className="p-10 input "
            ></Form.Control>
          </Col>
        </Row>
        <Nav.Link href="signin">I have already Account</Nav.Link>
      </Container>

      <div>
        <Container className="d-flex justify-content-center  flex-column align-items-center">
          <Button type="submit" className="    btn_holder px-5 input ">
            Sign Up
          </Button>
        </Container>
      </div>
    </>
  );
};
