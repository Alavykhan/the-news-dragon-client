import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
           <h2>Terms and conditions</h2> 
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deserunt molestiae quis rerum amet delectus sed vel ad nesciunt harum.</p>
           <p>Go Bank to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;