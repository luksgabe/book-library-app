
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

interface NavBarProps { }

export const Header: React.FC<NavBarProps> = () => {
  return (
    <Navbar bg="dark" expand="lg" style={{ color: 'white' }}>
      <Navbar.Brand href="/">Royal Library</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavItem>
            <NavLink to="/book" style={{ color: 'white', textDecoration: "none" }}>Book</NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};