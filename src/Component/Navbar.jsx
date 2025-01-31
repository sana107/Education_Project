import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    // Handle Click Event
    const handleClick = () => {
        setIsActive(!isActive); // Toggle the active state
    };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Renamed state

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen); // Use renamed state
    };
    return (
        <>
            <div className="container-fluid shadow py-2 navbarfixed">
                <div className="container">

                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <div class="container-fluid p-0">
                            <div className='d-flex' style={{ alignItems: 'center' }}>
                                <div><Link to='/'><img src="https://i.ibb.co/2q9TGNp/Screenshot-2024-12-31-113232.png" alt="" /></Link></div>
                                <div className='nav-search'><input type="search" className='search-input' placeholder="Try 'Sbi clerk' " name="" id="" /><i class="fa-solid fa-magnifying-glass search-icon"></i></div>
                            </div>

                            <button
                                class="navbar-toggler"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasNavbar"
                                aria-controls="offcanvasNavbar"
                                style={{ border: 'none' }}
                            >
                                {/* <span class=""></span> */}
                                <img style={{ width: '40px', height: "36px" }} src="https://i.ibb.co/PjJStmW/Screenshot-2025-01-02-164403.png" alt="" />
                            </button>
                            <div
                                class="offcanvas offcanvas-end"
                                tabindex="-1"
                                id="offcanvasNavbar"
                                aria-labelledby="offcanvasNavbarLabel"
                            >
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                                    <button
                                        type="button"
                                        class="btn-close text-reset"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div class="offcanvas-body">

                                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li class="nav-item">
                                            <a class="nav-link textblack navbartexthover" href="/">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <Link to='/book'><a class="nav-link textblack navbartexthover" href="">Books</a></Link>
                                        </li>
                                        <li class="nav-item">
                                            {/* <a class="nav-link textblack navbartexthover" href="#">My Purchases</a> */}
                                            <Link to='/refferal'> <a class="nav-link textblack navbartexthover" href="#">My Purchases</a></Link>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <div
                                                id="dropdownMenuLink"
                                                data-bs-toggle="dropdown"
                                                aria-expanded={isDropdownOpen} // Use renamed state
                                                className="d-flex"
                                                style={{
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    cursor: 'pointer',
                                                }}
                                                onClick={toggleDropdown} // Use renamed function
                                            >
                                                <a className="nav-link textblack navbartexthover" href="#">
                                                    Free Quizzes
                                                </a>
                                                <i className={`fa-solid ${isDropdownOpen ? 'fa-minus' : 'fa-plus'}`}></i>
                                            </div>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><Link to='/mcq'><a class="dropdown-item" href="#">CA Daily Affairs</a></Link></li>
                                                <li><Link to='/mcq'><a class="dropdown-item" href="">DI QUIZZ</a></Link></li>
                                                <li><Link to='/mcq'><a class="dropdown-item" href="#">MAINS PUZZLE</a></Link></li>
                                                <li><Link to='/mcq'><a class="dropdown-item" href="#">EDITORIAL ZONE</a></Link></li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <div class="navbar-icons">
                                    <Link to='authentication'>
                                        <i
                                            className={`fa-regular fa-user me-3 `}
                                            onClick={handleClick}
                                            style={{
                                                padding: '10px',
                                                borderRadius: '5px',
                                                cursor: 'pointer',
                                                transition: 'background-color 0.3s, color 0.3s',
                                                color:'#000'
                                            }}
                                        ></i>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
