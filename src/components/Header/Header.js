import React from 'react';
import { Link } from 'react-router-dom';
import LogoVan from '../../assets/logog.png'

const Header = () => {
  return (
    <nav className="navbar">
        <Link className="home_link" to="/">{<img src={LogoVan} alt="the logo for the app"/>}</Link>
        <div className="links">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </nav>
  )
}

export default Header