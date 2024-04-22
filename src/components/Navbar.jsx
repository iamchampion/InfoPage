import React, { useState } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import useResizeObserver from '../hooks/useResizeObserver';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import { NavLink } from './home/migration'; // Assuming this component represents a navigational link
import { Link } from 'react-router-dom'; // Required for routing

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      setIsTop(currPos.y >= -10); // Check if we're at the top
    },
    [navbarDimensions]
  );

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top ${isTop ? 'navbar-transparent' : 'navbar-white'}`}
      expand="lg"
    >
      <Navbar.Brand as={Link} to="/">
        Ajay Chemicals
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/GetInTouch">
              Who We Are
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/GetInTouch">
              Our Services
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/GetInTouch">
              Contact Us
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
