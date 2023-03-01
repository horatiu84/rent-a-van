import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home_div'>
        <h2>You got the travel plans, we got the travel vans.</h2>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      <div className='find_van'> <Link  to='/vans'>Find your van</Link></div>

    </div>
  )
}

export default Home