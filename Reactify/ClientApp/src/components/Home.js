import React from 'react';
import '../custom.css';
import { useHistory } from "react-router-dom";


const Home = () => {
    //const supriseAlbum = ['257976', '61793782', '113420682', '85796291', '85213026', '91551026', '15175163', '62346678', '104567086', '61026855', '1133983992'];
    //var albumId = supriseAlbum[Math.floor(Math.random() * supriseAlbum.length)];
    let albumId = "9288072";

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
