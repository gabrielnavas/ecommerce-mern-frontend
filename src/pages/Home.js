import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import categories from '../categories'

import './Home.css'

function Home() {
  return (
    <div className='home__image--container'>
      <img src="https://res.cloudinary.com/learn-code-10/image/upload/v1653947013/yqajnhqf7usk56zkwqi5.png" alt="img top" />
      <div className="featured-products-container container mt-4">
        <h2>Últimos Produtos</h2>
        {/* last products here */}
      </div>
      <div>
        <Link to="/category/all" className='home__categoryall--link'>
          See more {">>"}
        </Link>
      </div>
      {/* banner */}
      <div className="sale__banner--container mt-4">
        <img src="https://res.cloudinary.com/learn-code-10/image/upload/v1654093280/xkia6f13xxlk5xvvb5ed.png" alt='banner' />
      </div>
      <div className="recent-products-container container mt-4">
        <h2 className='mt-4'>Categorias</h2>
        <Row className='mb-4'>
          {
            categories.map(category => (
              <LinkContainer key={category.name} to={`/category/${category.name.toLocaleLowerCase()}`}>
                <Col md={4}>
                  <div style={{
                    backgroundImage: `
                      linear-gradient(
                        rgba(0, 0, 0, 0.5), 
                        rgba(0, 0, 0, 0.5)
                      ), 
                      url(${category.img})
                    `,
                    gap: "10px"
                  }}
                  className="category-title">
                    {category.name}
                  </div>
                </Col>
              </LinkContainer>
            ))
          }
        </Row>
      </div>
    </div>
  )
}

export default Home