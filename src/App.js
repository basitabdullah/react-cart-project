import React from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Home from './components/Home'
import "./styles/app.scss"
import "./styles/colors.scss"
import Header from './components/Header'
import {Toaster} from "react-hot-toast"
import Cart from './components/Cart'


const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App