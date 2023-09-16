import React from 'react'
import img1 from "../assets/pngwing.com.png"
import { Link } from 'react-router-dom'
import { FiShoppingBag } from 'react-icons/fi'
import { useSelector } from 'react-redux'

const Header = () => {
  const {cartItems} = useSelector(state => state.cart)
  return (
    <nav>
   <div className="logo">
    <img src={img1} alt="logo here..." />
   </div>

   <div className='links'>
    <Link to={"/"}>Home</Link>
    <Link to={"/cart"}>
      <FiShoppingBag/>
      <p>{cartItems.length}</p>
    </Link>
   </div>
    </nav>
  )
}

export default Header