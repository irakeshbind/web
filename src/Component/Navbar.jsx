import React from 'react'
import './Navbar.css';
import img1 from '../images/img1.jpg';
const Navbar = () => {
  return (
    <>
    <header className="header">
      <a href="" className='logo'>
        <img src={img1} alt="rakesh" className='logoimg'/>
      </a>
      <nav className="navbar">
       <li> <a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#products">Prohducts</a></li>
        <li><a href="#review">Review</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#blogs">Blogs</a></li>

      </nav>
      <div className="icon">
        <div className='fas fa-search'></div>
        <div className='fa fa-shopping-cart'></div>
        <div className='fas fa-bars' i></div>
      </div>
    </header>
    </>
  )
}

export default Navbar