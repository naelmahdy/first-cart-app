import React from 'react'
import { Button, Container, Image, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clear, deleteFromCart } from '../rtk/slices/cart.slice'
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    console.log('reduce', product);
    return acc;
  }, 0)
  return (

    <Container className='py-5'>

      <h1 className='pt-4'>welcome to cart</h1>
      {cart.length > 0 &&
        <>
          <Button variant='primary' className='my-3' onClick={() => { dispatch(clear()) }}>clear the cart</Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>title</th>
                <th>image</th>
                <th>quantity</th>
                <th>price</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>

              {cart.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td> {product.title}</td>
                  <td><Image style={{ height: '50px' }} alt='' src={product.image} /></td>
                  <td>{product.quantity}</td>
                  <td>{product.price}$</td>
                  <td><Button variant='danger' onClick={() => { dispatch(deleteFromCart(product)) }}>Delete</Button></td>
                </tr>
              ))}
              <tr>
                <td colSpan={3}>Total Price</td>
                <td colSpan={3}>{totalPrice.toFixed(2)}$</td>
              </tr>
            </tbody>
          </Table>
          <Button variant='primary' className='my-3' onClick={() => { navigate("/checkout") }}>check out</Button>

        </>
      }

    </Container>

  )
}
