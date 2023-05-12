import React from "react";
import { Link } from "react-scroll";
export default function Header() {
  return (
    <div className="header">
      <p className="logo">GG</p>

      <nav className="headerNav">
          <Link to="skills" smooth={true} duration={1000}>
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={2000}>
            Projects
          </Link>
          <Link to="footer" smooth={true} duration={2000}>
            Contact Me
          </Link>
        </nav>
    
      
     
    </div>
  );
}