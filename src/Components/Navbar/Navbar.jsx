/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="fs-3 ubuntu navbar-brand" style={{ color: "white" }}><span className="text-primary">RickVerse </span> </ Link>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <style jsx>
                        {
                            `
                            button[aria-expanded="false"] > .close{
                                display:none;
                            }

                              button[aria-expanded="true"] > .open{
                                display:none;
                            }
                            
                            `
                        }
                    </style>
                    <i className="fas fa-bars open fw-bold"></i>
                    <i className="fas fa-times close fw-bold"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className="navbar-nav">
                        <NavLink activeClassName="" to="/" className="nav-link" >Characters</NavLink>
                        <NavLink to="/episodes" className="nav-link" >Episode</NavLink>
                        <NavLink to="/locations" className="nav-link ">Location</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
