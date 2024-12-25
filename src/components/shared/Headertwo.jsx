import React from 'react'
import logo from '../../assets/venets_logo.jpg'
import { useWindowScroll } from '@mantine/hooks';

function Headertwo() {
    const [scroll, scrollTo] = useWindowScroll();
    return (
        <header className={`${scroll.y > 50 ? 'minimized' : ''}`}>
            <div className="section-wrapper">
                <div className="header-wrapper">
                    <div className="site-logo">
                        <a href="/" rel="home">
                            <img src={logo} width="50px" />
                        </a>
                    </div>
                    <nav className="main-navigation">
                        <div className="menu-main-menu-container">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/aboutus">About DSR</a></li>
                                <li><a href="/projects">Projects</a></li>
                                <li><a href="/contactus">Contact Us</a></li>
                            </ul>
                        </div>
                    </nav>
                    <button className="hamburger hamburger--spring" type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Headertwo