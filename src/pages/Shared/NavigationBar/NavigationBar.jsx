import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);


    const handleSignOut=()=>{
        logOut()
        .then(()=>{

        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none text-black' to='/'>Home</Link>
                             <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                            user && <FaUserCircle style={{fontSize: '2rem'}}/>
                            }

                            {
                            user? <Button onClick={handleSignOut} variant="secondary">Log Out</Button>: <Link to='/login'><Button variant="secondary">Login</Button></Link>
                            }
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </Container>    
        
);
};

export default NavigationBar;