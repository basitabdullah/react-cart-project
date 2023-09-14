import React from 'react'
import img1 from "../assets/pngwing.com.png"
import { Link } from 'react-router-dom'
import { FiShoppingBag } from 'react-icons/fi'

const Header = () => {
  return (
    <nav>
   <div className="logo">
    <img src={img1} alt="logo here..." />
   </div>

   <div className='links'>
    <Link to={"/"}>Home</Link>
    <Link to={"/cart"}>
      <FiShoppingBag/>
      <p>{0}</p>
    </Link>
   </div>
    </nav>
  )
}

export default Header