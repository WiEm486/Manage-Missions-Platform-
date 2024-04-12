import img2 from "../assets/logoRobot.png";
import { Button, Col, Container, Form, Image, Nav, Row } from "react-bootstrap";
import iconGoogle from "../assets/google (2).png";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export const SignIn = () => {
  const { googleSignIn } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="image-container">
        <Image src={img2} className="centered-image"></Image>
      </div>
      <h1 style={{ textAlign: "center", fontFamily: "Montserrat Alternates" }}>
        Welcome Back
      </h1>
      <Container className="  d-flex justify-content-center flex-column align-items-center">
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
        <Nav.Link href="signup">Sign up </Nav.Link>
      </Container>

      <div>
        <Container className="  d-flex justify-content-center  flex-column align-items-center">
          <Button type="submit" className="    btn_holder px-5 input ">
            Continue
          </Button>
          <p>-------OR-------</p>
          <Button
            type="submit"
            className="    m-1 px-5  "
            variant="light"
            style={{ borderColor: "grey" }}
            onClick={handleGoogleSignIn}
          >
            Continue with Google <img src={iconGoogle} alt="google"></img>
          </Button>
        </Container>
      </div>
    </>
  );
};
