import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <svg width={50} height={50} onClick={() => setIsSidebarOpen(true)} xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 open" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </Link>
        </div>
        <nav id="nav-menu" className={isSidebarOpen ? 'active' : null}>
            <ul className="nav-menu-items">
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <svg width={50} height={50} onClick={() => setIsSidebarOpen(false)} xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 close" fill="white" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Link>
                </li>
                <li className="nav-text">
                    <Link to="#">
                        <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Create a note</span>
                    </Link>
                </li>
                <li className="nav-text">
                    <Link to="#">
                        <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Create a note</span>
                    </Link>
                </li>
                <li className="nav-text">
                    <Link to="#">
                        <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Create a note</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar