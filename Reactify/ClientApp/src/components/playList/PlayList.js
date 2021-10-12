import '../../custom.css';
import './PlayList.css';

import React, { useEffect, useState } from "react";
import axios from "axios";


const PlayList = () => {

    const [playList, setPlayList] = useState([]);

    const [isLikedSong, setIsLikedSong] = useState(false);

    const LikeSong = () => {
        console.log("likeMusic");
        if (isLikedSong) setIsLikedSong(false);
        else {
            setIsLikedSong(true);
        }
    };

    useEffect(() => {
        axios
            .get("event")
            .then((res) =>
                setPlayList(res.data)
            );
    }, []);

    return (
        <>

            <div class="background-music-player">
                { /* ide mehetne lejátszó */ }
            </div>
            <section>
                <div class="album-info">
                    <div class="album-art"><img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" />
                        <div class="actions">
                            <div class="play">Play</div>
                            <div class="bookmark" onClick={() => LikeSong()}>
                                {isLikedSong ? <i class="fas fa-heart"></i> : <i class="far fa-heart"></i>}
                            </div>
                        </div>
                    </div>
                    <div class="album-details">
                        { /* itt kell majd képet és infókat beadni az actual számról */}

                        <h2> <img src="https://68.media.tumblr.com/avatar_edbd71e8c8ac_128.png" />Skillet</h2>
                        <h1>Unleashed</h1><span> <span>Hard Rock</span><span>&copy; 2016 Atlantic Recording Corporation</span></span>
                        <p>Unleashed is the tenth album by American Christian rock band Skillet, released on August 5, 2016. The album was announced on May 20, 2016, and a lyric video was released for the track "Feel Invincible" at the same time on the band's YouTube channel. Six days later, the band released a lyric video for the track "Stars" on their YouTube channel.</p>
                    </div>
                </div>
                <div class="album-tracks">
                    <p> <span>Title</span><span>Artist / Band</span><span><i class="fas fa-clock"></i></span></p>
                    <ol>
                        <li> <span>Feel Invincible</span><span>Skillet</span><span>3:49</span></li>
                        <li> <span>Back From The Dead</span><span>3:33</span></li>
                    </ol>
                </div>
            </section>
        </>

    );

}

export default PlayList;
