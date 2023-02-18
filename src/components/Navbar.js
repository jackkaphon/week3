import React from 'react'
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <div>
        <nav>
        <div className="logo">
            <h1>Logo</h1>
        </div>

        <div className="navMenu">
            <p>Home</p>
            <p>Gallery</p>
            <p>Menu</p>
            <p>About</p>
            <p>Contact</p>
        </div>

        <div className="search">
            <input className="searchInput"/>
        </div>
    </nav>
    </div>
  )
}
