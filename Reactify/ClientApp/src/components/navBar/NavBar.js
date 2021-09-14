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
                <a href="/">Ide mehet az ikonunk legyen az bármi</a>
                <a href="elso">first</a>
                <a href="masodik">second</a>
                <a href="harmadik">third</a>
                <a href="javascript:void(0);" class="icon" onClick={mobileMenu}>
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </>
    );

}

export default NavBar;