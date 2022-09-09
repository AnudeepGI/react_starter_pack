import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <Link to="/" >Home</Link><br />
            <Link to="/about" >About</Link><br />
            <Link to="/product" >product</Link>
        </>
    )
}
