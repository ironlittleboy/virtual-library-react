import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Profile from './components/pages/Profile'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import FormBook from './components/pages/FormBook'
import Libro from './components/pages/Libro'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Toaster />
        <Routes>
          <Route  path='/' element={<Home />}/>
          <Route  path='/profile' element={<Profile />}/>
          <Route  path='/login' element={<Login />}/>
          <Route  path='/register' element={<Register />}/>
          <Route  path='/subirlibro' element={<FormBook />}/>
          <Route  path='/libro' element={<Libro />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App