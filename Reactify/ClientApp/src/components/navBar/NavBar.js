import React from 'react';
import './NavBar.css';

const NavBar = () => {
    console.log("im trying to mount navbar");
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
            <div className="topnav" id="myTopnav">
                <a href="/">Ide mehet az ikonunk legyen az b�rmi</a>
                <a href="elso">Whooof</a>
                <div className="search-container">
                    <input type="text" placeholder="Search.." />
                    <button type="submit"><i className="fa fa-search"/></button>
                </div>
                
                <a href="masodik">second</a>
                <a href="harmadik">third</a>
                <a href="javascript:void(0);" className="icon" onClick={mobileMenu}>
                    <i className="fa fa-bars"/>
                </a>
            </div>
        </>
    );

}

export default NavBar;