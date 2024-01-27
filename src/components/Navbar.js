import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import avartar from "../images/image-avatar.png";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import gsap from "gsap";
import Notification from "./Notification";

function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMenuOpen, setMenuOpen] = useState(true);

    useEffect(() => {
        const handleWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWidth);
        return () => {
            window.removeEventListener('resize', handleWidth);
        };
    }, []);

    const style = {
        display: windowWidth < 701 ? "block" : 'none'
    };
    const style2 = {
        display: isMenuOpen && windowWidth < 701 ? "none" : 'flex'
    };
    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        gsap.to(".navbar nav", {
            width: isMenuOpen ? "" : '75%',
            y: isMenuOpen ? "0" : '45%',
            duration: 1.2,
            ease: "power2.inOut",
        });
    }, [isMenuOpen]);

    const style3 = {
        position: isMenuOpen ? "relative" : "absolute",
        padding: isMenuOpen ? '0%' : '5%',
       
        width: isMenuOpen ?"":"40%",
        margin: isMenuOpen ?"":"0%",
        zIndex: isMenuOpen ?"":"100",
        height: isMenuOpen ?"":"500px"
    };

    return (
        <>
            <div className="navbar">
                <nav style={style3}>
                    <span className="img">
                        <img src={isMenuOpen ? menu : close} className="men" onClick={handleMenuToggle} style={style} alt="Logo" />
                        <img className='log' style={{ visibility: isMenuOpen ? "visible" : "hidden" }} src={logo} alt="Logo" />
                    </span>

                    <NavLink style={style2} to="/ecommerce-product-paged">Collection</NavLink>
                    <NavLink style={style2} to="/Men">Men</NavLink>
                    <NavLink style={style2} to="/Women">Women</NavLink>
                    <NavLink style={style2} to="/About">About</NavLink>
                    <NavLink style={style2} to="/Contact">Contact</NavLink>
                </nav>
                <div className="profile">
                    <div className='d-flex align-items-center'>
                        <span>
                            <Notification />
                        </span>
                        &nbsp;&nbsp;
                    </div>
                    <div className="circle">
                        <img className="avartar" src={avartar} alt="Logo" />
                    </div>
                </div>
            </div>
            {windowWidth>701 &&<hr></hr>}
        </>
    );
}

export default Navbar;
