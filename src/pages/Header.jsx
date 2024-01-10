import React from "react";

function Header() {

    return(
        <header className="header-area header-sticky" data-aos="fade-down" data-aos-duration="2500">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <a href="index.html" className="logo">
                                <img src="../images/logo.png" alt="" />
                            </a>
                            <ul className="nav">
                                <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                                <li className="scroll-to-section"><a href="#about">About</a></li>
                                <li className="scroll-to-section"><a href="#services">Services</a></li>
                                <li className="scroll-to-section"><a href="#gallery">Gallery</a></li>
                                <li className="scroll-to-section"><a href="#partners">Partners</a></li> 
                                <li className="scroll-to-section"><a href="#contact">Contact</a></li> 
                                <li className="scroll-to-section">
                                    <div className="border-first-button">
                                        <a href="#contact">Book Now</a>
                                    </div>
                                </li> 
                            </ul>        
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;