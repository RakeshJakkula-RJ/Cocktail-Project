import React from "react";
import { NavLink } from "react-router";
import Wrapper from "../assets/Wrappers/Navbar";




const Navbar = () => {
 

     return <Wrapper>
              <div className="nav-center">
                  <span className="logo">Cocktail</span>
                  <div className="nav-links">
                    <NavLink to="/cocktail-project" className="nav-link">Home</NavLink>
                    <NavLink to="/cocktail-project/about" className="nav-link">About</NavLink>
                    <NavLink to="/cocktail-project/newsletter" className="nav-link">NewsLetter</NavLink>
                  </div>
              </div>
            </Wrapper>

};


  export default Navbar;  