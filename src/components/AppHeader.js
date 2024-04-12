import React from "react";
import { Container, Nav, NavLink, Navbar } from "react-bootstrap";
import img2 from "../assets/logoRobot.png";
import { UserAuth } from "../context/AuthContext";
export const AppHeader = () => {
  const { logOut, auth, user } = UserAuth();
  const handleSignOut = () => {
    try {
      logOut();
      console.log(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink href="home">
          {" "}
          <img alt="hello" src={img2} style={{ width: "3rem" }}></img>
        </NavLink>

        <h6 style={{ fontFamily: "FontsFree-Net-Arboria-Bold" }}>
          Hello !{user?.displayName}
        </h6>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="home#about">About</Nav.Link>
            <Nav.Link href="services">Services</Nav.Link>
            <Nav.Link href="home#contact">Contact </Nav.Link>

            <Nav.Link onClick={handleSignOut}>LogOut </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
