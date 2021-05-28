import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Jumbotron } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { unlock } from '../actions/unlockAction';
import FormContainer from '../components/FormContainer';


const LockScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');

  const redirect = location.search ? location.search.split('=')[1] : '/';
  console.log(location.search)

  const dispatch = useDispatch();
  const unlockInfo = useSelector(state => state.unlockInfo);
  const { loading, error, userInfo } = unlockInfo;
  console.log(unlockInfo);

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(unlock(email));
  }

  return (
    <Jumbotron>
      <div className='d-flex justify-content-center align-items-center flex-grow-1'>
        <FormContainer>
          <h1>UNLOCK</h1>
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              >
              </Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary' className='btn-block'>UNLOCK</Button>
          </Form>
        </FormContainer>
      </div>
    </Jumbotron>
  )
}

export default LockScreen
