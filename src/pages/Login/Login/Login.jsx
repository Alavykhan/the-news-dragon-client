import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {

    const {signInUser} =useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/category/0'; 

    const handleSignIn =event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signInUser(email, password)
        .then(result=>{
            const signedIn= result.user;
            console.log(signedIn);
            navigate(from, {replace: true})
        })
        .catch(error=>{
            console.log(error)
        })
    }


    return (
    <Container className='w-25 mx-auto'>
        <h3>Please Login</h3>
         <Form onSubmit={handleSignIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <br />
            <Form.Text className="text-muted">
                Don't have an account <Link to='/register'>Register</Link>
            </Form.Text>
            <Form.Text className="text-muted">
                
            </Form.Text>
    </Form>
    </Container>
    );
};

export default Login;