import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopup/LoginPopUp'
import Navbar from './components/Navbar/Navbar'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {
  const [ShowLogin, setShowLogin] = useState(false)
  return (
    <>
      {ShowLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />

        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App

