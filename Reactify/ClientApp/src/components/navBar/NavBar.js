import React, { useState } from 'react';
import './NavBar.css';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
    const mobileMenu = () => {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };

    const [track, setTrack] = useState("");
    const history = useHistory();
    const goToTracklist = () => history.push({
        pathname: "/track",
        state: { detail: track }
    });

    return (
        <>
            <div className="topnav" id="myTopnav">
                <a href="/">Ide mehet az ikonunk legyen az bármi</a>
                <a href="elso">Whooof</a>
                <div className="search-container">
                    <input name="track"
                        id="track" type="text"
                        placeholder="Search.."
                        onChange={(e) => { setTrack(e.target.value) }} />
                    <button type="submit" onClick={goToTracklist}><i className="fa fa-search" /></button>
                </div>

                <a href="masodik">second</a>
                <a href="/search-band">ArtistWiki</a>
                <a href="javascript:void(0);" className="icon" onClick={mobileMenu}>
                    <i className="fa fa-bars" />
                </a>
            </div>
        </>
    );

}

export default NavBar;