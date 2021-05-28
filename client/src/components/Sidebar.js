import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Sidebar = () => {
  const dispatch = useDispatch();


  const logoutHandler = () => {
    console.log('For Logout');
  }

  return (
    <header className='nav-container'>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect className='sidenav'>
        <Container>
          {/* <LinkContainer to='/'>
            <Navbar.Brand>My Resume</Navbar.Brand>
          </LinkContainer> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-column">
              <LinkContainer to='/home'>
                <Nav.Link><i className='fas fa-shopping-cart'></i>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link><i className='fas fa-shopping-cart'></i>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/skill'>
                <Nav.Link><i className='fas fa-shopping-cart'></i>Skill</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/experience'>
                <Nav.Link><i className='fas fa-shopping-cart'></i>Experience</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/education'>
                <Nav.Link><i className='fas fa-shopping-cart'></i>Education</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/achievement'>
                <Nav.Link><i className='fas fa-shopping-cart'></i>Achievements</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </header >
  )
}

export default Sidebar
