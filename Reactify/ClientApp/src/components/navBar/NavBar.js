import React, { Component } from 'react';
import './NavBar.css';

const NavBar = () => {

    const mobileMenu = () => {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };

    return (
        <>
            <div class="topnav" id="myTopnav">
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="javascript:void(0);" class="icon" onClick={mobileMenu}>
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </>
    );

}

export default NavBar;