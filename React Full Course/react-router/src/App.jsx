import './App.css'
import { useState, useEffect, useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import AboutTeam from './components/AboutTeam'
import Blog from './components/Blog'
import BlogDetail from './components/BlogDetail'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Dashboard from  './components/Dashboard'

function App() {

  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/login'>Login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}>
          <Route path='team' element={<AboutTeam />}/>
        </Route>  
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<BlogDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
