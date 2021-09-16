import React from 'react';
import '../custom.css';
import { useHistory } from "react-router-dom";


const Home = () => {

    var albumId = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    console.log(albumId);

    //"302127"
    const history = useHistory();
    const getSupriseMusic = () => history.push({
        pathname: "/player",
        state: { detail: albumId }
    });

    return (
        <>
            <div className="background-container" data-testid="background-video">
                <video autoPlay loop muted>
                    <source src="./video/home.mp4" type="video/mp4" />
                </video>
            </div>

            <div className='container-button'>
                <button data-testid="play-music-button" onClick={getSupriseMusic} className='one'>Play some <b>amazing</b> music!</button>
            </div>
        </>
    );

}

export default Home;
