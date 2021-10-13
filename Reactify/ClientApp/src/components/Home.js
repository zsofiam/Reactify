import React from 'react';
import '../custom.css';
import { useHistory } from "react-router-dom";


const Home = () => {

    let albumId = "262340352";

    const history = useHistory();
    const getSupriseMusic = () => history.push({
        pathname: "/player",
        state: { detail: albumId }
    });


    const getDonation = () => history.push({
        pathname: "/support",
    });

    return (
        <>
            <div className="background-container" data-testid="background-video">
            </div>
            <div className='container-button'>
                <button data-testid="play-music-button" onClick={getSupriseMusic} className='one'>Play
                    some <b>amazing</b> music!
                </button>
                <button data-testid="play-music-button" onClick={getDonation}
                    className='three'>Support <b>Reactify's</b> developers!
                </button>

            </div>
        </>
    );

}

export default Home;
