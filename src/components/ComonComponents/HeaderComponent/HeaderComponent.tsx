import React, {useState} from 'react'

// Add SCSS
import './HeaderComponent.scss' 

export default function HeaderComponent() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
    {/* <!-- Navigation Bar --> */}
    <nav className="navbar">
        <div className="navbar-brand">WeTechWizards</div>
        <div id="hamburger"
          className={`hamburger ${isActive ? 'active hamburger' : 'hamburger'}`} 
          onClick={handleToggle}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul id="nav-menu"
          className={`nav-menu ${isActive ? 'active navbar-nav' : 'navbar-nav'}`}
        >
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    </div>
  )
}
