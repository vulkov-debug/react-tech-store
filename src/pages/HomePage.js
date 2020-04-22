import React from 'react';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';


export default function HomePage() {
    return (
        <>
      <Hero title='awsome gadjets' max>
          <Link to='/products' className='main-link' style={{margin:'2rem'}}>
              our products
          </Link>
      </Hero>
        </>
    )
}
