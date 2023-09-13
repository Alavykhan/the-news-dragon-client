import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsides from '../EditorsInsides/EditorsInsides';

const News = () => {
    const news = useLoaderData();
    const {title, _id, details, image_url, category_id }= news;
    return (
        <div>
            <Card className='mb-3'>
                <Card.Img variant="top" src={image_url}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {details}
                    </Card.Text>
                    <Button variant="danger"><Link className='text-decoration-none text-white' to={`/category/${category_id}`}>All news in this category ID</Link></Button>
                </Card.Body>
                </Card>
                <EditorsInsides/>
        </div>
    );
};

export default News;