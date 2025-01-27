import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = (props) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${props.product._id}`}>
            <Card.Img src={props.product.image} variant='top' />
        </Link>
        <Card.Body>
            <Link to={`/product/${props.product._id}`}>
                <Card.Title as='div'>
                    <p>{props.product.name}</p>
                </Card.Title>
            </Link>

            <Card.Text as="div">
              <Rating value={props.product.rating} text={`${props.product.numReviews} reviews`}/>
            </Card.Text>

            <Card.Text as="h3">
              <p>${props.product.price}</p>
            </Card.Text>
        </Card.Body>
    </Card>
    
  )
}

export default Product