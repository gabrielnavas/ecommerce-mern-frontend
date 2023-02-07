import React, { useState } from 'react'

import { Col, Container, Row, Form, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import './Login.css'

function Login() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit() {

  }

  return (
    <Container>
      <Row>
        <Col md={6} className="login__form--container">
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <h1>Entre com sua conta!</h1>
            <Form.Group className='login__form--group'>
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type ="email" placeholder="john@email.com" required value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className='login__form--group'>
              <Form.Label>Senha</Form.Label>
              <Form.Control type ="password" placeholder="******" required value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group style={{ marginTop: '20px' }}>
              <Button type="submit">Entrar</Button>
            </Form.Group>
            <p style={{ marginTop: '5px' }}><Link to="/signup">Não tenho conta ainda</Link></p>
          </Form>
        </Col>
        <Col md={6} className="login__image--container"></Col>
      </Row>
    </Container>
  )
}

export default Login