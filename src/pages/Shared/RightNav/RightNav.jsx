import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
import './RightNav.css';

const RightNav = () => {
    return (
        <div>
            <h3>Login with:</h3> 
            <Button variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"> <FaGithub /> Login with Github</Button>
            <div>
                <h4>Find us on:</h4>
                <ListGroup>
                <ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item>
                <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
                <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone/>
            <div className='bg-img'>
                <div className='text-center text-white pt-5'>
                <h1>Create an Amazing Newspaper</h1>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;