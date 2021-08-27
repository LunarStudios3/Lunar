import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import '../styles/nav.css'
 function Menu (){
     return(
        <Navbar className="color-nav" sticky="top" bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <NavLink href="#home">About 
                        <div className="aboutvl"></div>
                    </NavLink>
                    <NavLink href="#features">Team 
                        <div className="teamvl"></div>
                    </NavLink>
                    <NavLink href="#pricing">Portfolio 
                        <div className="portfoliovl"></div>
                    </NavLink>
                    <NavLink href="#services">Services 
                        <div className="servicesvl"></div>
                    </NavLink>
                    <NavLink href="#contact">Contact </NavLink>
                </Nav>
            </Container>
        </Navbar>
     
    );
 }

 export default Menu
