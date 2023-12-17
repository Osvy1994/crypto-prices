import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavbarComp.css";
import { Twitter, Discord } from "react-bootstrap-icons";
import { useState, useEffect } from "react";

export function NavbarComp() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos <= 400) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navbarStyle = {
    transition: "background-color 0.5s",
    position: "fixed",
    top: "0",
    width: "100%",
    background: atTop ? "#130749" : "#0f051d",
    zIndex: "1000",
  };

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="navbar-dark"
      style={navbarStyle}
    >
      <Container className="navbar-container">
        <Navbar.Brand className="project-title" href="#home">
          CRYPTO PRICES
        </Navbar.Brand>
        <Container id="element1" className="links-icons-container">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={30} />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Discord size={30} />
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links-container">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#market">Market</Nav.Link>
            <Nav.Link href="#choose">Choose Us</Nav.Link>
            <Nav.Link href="#join">Join</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
