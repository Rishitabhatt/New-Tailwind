import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    
    <a className="navbar-brand">Home</a>
    <a className="navbar-brand"> <Link to="/about">About</Link></a>
    <a className="navbar-brand"><Link to="/contact">Contact</Link></a>
    <a className="navbar-brand">FAQ</a>
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
    </div>
</nav>
    </div>
  )
}

export default Header;