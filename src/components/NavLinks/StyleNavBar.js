import React from 'react'
import { NavLink } from "react-router-dom";

export default function StyleNavBar() {
  return (
    <div className='linkStyle'>
      <NavLink to="/"
        className={({ isActive }) => isActive ? "activeClassName" : "inactiveclassnaem"}
      >Home</NavLink><br />
      <NavLink to="/about"
        className={({ isActive }) => isActive ? "activeClassName" : "inactiveclassnaem"}
      >About</NavLink><br />
      <NavLink to="/product"
        className={({ isActive }) => isActive ? "activeClassName" : "inactiveclassnaem"}
      >product</NavLink>
    </div>
  )
}
