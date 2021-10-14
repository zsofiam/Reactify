import '../../custom.css';
import './PlayList.css';
import MusicPlayer from "../musicPlayer/MusicPlayer";

import React, { useEffect, useState } from "react";
import axios from "axios";


const PlayList = () => {

    const [playList, setPlayList] = useState([]);
    const [isLikedSong, setIsLikedSong] = useState(false);
    const [foundUser, setFoundUser] = useState(false);

    const LikeSong = () => {
        console.log("likeMusic");
        if (isLikedSong) setIsLikedSong(false);
        else {
            setIsLikedSong(true);
        }
    };

    useEffect(() => {
        let axios = require("axios").default;

        let options = {
            method: 'POST',
            params: { UserId: sessionStorage.getItem("userId")},
            url: 'https://localhost:' + window.location.port + '/account/playlist',

        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                if (response.data != null) {
                    setFoundUser(true);
                    setPlayList(response.data);
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <>

            <div className="background-music-player" data-testid="player">
                <MusicPlayer />
            </div>
            <section data-testid="playlist">
                {/*<div className="album-info">*/}
                {/*    <div className="album-art"><img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"  alt="album cover"/>*/}
                {/*        <div className="actions">*/}
                {/*            <div className="play">Play</div>*/}
                {/*            <div className="bookmark" onClick={() => LikeSong()}>*/}
                {/*                {isLikedSong ? <i className="fas fa-heart"/> : <i className="far fa-heart"/>}*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="album-details">*/}
                {/*        { /* itt kell majd képet és infókat beadni az actual számról *!/*/}
                {/*    */}
                {/*        <h2> <img src="https://68.media.tumblr.com/avatar_edbd71e8c8ac_128.png" />Skillet</h2>*/}
                {/*        <h1>Unleashed</h1><span> <span>Hard Rock</span><span>&copy; 2016 Atlantic Recording Corporation</span></span>*/}
                {/*        <p>Unleashed is the tenth album by American Christian rock band Skillet, released on August 5, 2016. The album was announced on May 20, 2016, and a lyric video was released for the track "Feel Invincible" at the same time on the band's YouTube channel. Six days later, the band released a lyric video for the track "Stars" on their YouTube channel.</p>*/}
                {/*    </div>*/}
                {/*</div>*/}

                { foundUser ?
                    <div className="album-tracks">
                        <p> <span>Title</span><span>Artist / Band</span><span><i className="fas fa-clock"/></span></p>
                        <ol>
                            {playList.map((track, index) => (
                                <li key={index}><span>{track.title}</span><span>{track.artistName}</span></li>
                            ))}
                        </ol>
                    </div>
                    :
                    <></>
                }
                
            </section>
        </>

    );

}

export default PlayList;
