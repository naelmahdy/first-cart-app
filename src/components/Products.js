import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slices/products-slice';
import { addToCart } from '../rtk/slices/cart.slice';
function Products() {

  const products = useSelector((state) => state.products)
  const cart = useSelector((state) => state.cart)
  console.log('cart', cart);
  const dispatch = useDispatch()
  // console.log('products', products);
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  return (
    <div>

      <Container className='py-5'>
        <Row className='py-5'>
          {products.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img style={{ height: '300px' }} variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.Title}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <Card.Text>
                    {product.price}$
                  </Card.Text>
                  <Button variant="primary" onClick={() => { dispatch(addToCart(product)) }}>Add To Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}


        </Row>
      </Container>

    </div>
  )
}
export default Products