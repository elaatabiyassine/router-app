import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = (props) => {
    console.log(props)
    return (
        <nav>
            <div className="nav-wrapper">
                <NavLink to="/" className="brand-logo ">PokeBall</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)