import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <>
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere corporis optio sint! Deleniti, ducimus exercitationem error pariatur iure sequi. Tempore doloremque soluta numquam amet! Vel eius molestias neque esse adipisci magni, eum id omnis aut perspiciatis voluptate explicabo quisquam fugit!</p>
      <ul>
        <li><Link to='/about/team'>Team</Link></li>
      </ul>
      <Outlet />
    </>
  )
}

export default About
