import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaRegUser, FaShareAlt, FaStar, } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {title, _id, author, details, image_url, total_view, rating}= news;
    return (
        <div>
               <Card className='my-4'>
                <Card.Header className='d-flex align-items-center'>
                <Image style={{height:"40px", width: "40px"}} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author.name}</p>
                    <p><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                </div>
                <div>
                <FaRegBookmark/>
                <FaShareAlt/>
                </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={image_url} alt="Card image" />
                    <Card.Text>
                    {details.length <250 ? <>{details}</>: <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                        <Rating
                         placeholderRating={rating?.number}
                         readonly
                         emptySymbol={<FaRegStar/>}
                         placeholderSymbol={<FaStar className='text-warning'/>}
                         fullSymbol={<FaStar/>}
                        >
                        </Rating>
                        <span></span>
                    </div>
                    <div>
                        <FaEye/> {total_view}
                    </div>
                </Card.Footer>
                </Card>
        </div>
    );
};

export default NewsCard;