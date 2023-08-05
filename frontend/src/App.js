import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'
import {ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <>
      <Router>
        <h1 className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </h1>
      </Router>
      <ToastContainer/>
    </>
  )
}

export default App
