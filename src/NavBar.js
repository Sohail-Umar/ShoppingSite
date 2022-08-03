import React from "react";
import { Link } from "react-router-dom";
import "./App.css"


function NavBar() {
    return (
        <>
            <div className="NavBar">
                <Link to="/" ><h2>Home</h2></Link>
                <Link to="/cart"><h2>My Cart</h2></Link>
                <Link to="/signin"><h2>Sign In</h2></Link>
                <Link to="/signout"><h2>Sign Out</h2></Link>
            </div>
        </>
    );
}

export default NavBar;