import React, { useState } from 'react'

import { Col, Container, Row, Form, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import './Signup.css'

function Signup() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit() {

  }

  return (
    <Container>
      <Row>
        <Col md={6} className="signup__form--container">
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <h1>Faça o cadastro na sua conta.</h1>
            <Form.Group className='signup__form--group'>
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type ="email" placeholder="john@email.com" required value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className='signup__form--group'>
              <Form.Label>Senha</Form.Label>
              <Form.Control type ="password" placeholder="******" required value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group style={{ marginTop: '20px' }}>
              <Button type="submit">Cadastrar</Button>
            </Form.Group>
            <p style={{ marginTop: '5px' }}><Link to="/login">Já tenho conta</Link></p>
          </Form>
        </Col>
        <Col md={6} className="signup__image--container"></Col>
      </Row>
    </Container>
  )
}

export default Signup