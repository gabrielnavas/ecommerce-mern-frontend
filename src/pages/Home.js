import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

function Home() {
  return (
    <div>
      <img src="https://res.cloudinary.com/learn-code-10/image/upload/v1653947013/yqajnhqf7usk56zkwqi5.png" alt="img top" />
      <div className="featured-products-container container mt-4">
        <h2>Last products</h2>
        {/* last products here */}
      </div>
      <div>
        <Link to="/category/all" className='home__categoryall--link'>
          See more {">>"}
        </Link>
      </div>
      {/* banner */}
      <div className="sale_banner--container mt-4">
      <img src="https://res.cloudinary.com/learn-code-10/image/upload/v1654093280/xkia6f13xxlk5xvvb5ed.png" alt='banner' />
      </div>
    </div>
  )
}

export default Home