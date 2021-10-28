import axios from "axios";
import React, { useEffect, useState } from 'react';
import './MusicPlayer.css';
import Player from './Player.js';
import { useLocation } from "react-router-dom";

const MusicPlayer = (detail) => {
    const [songs, setSongs] = useState({});

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
    const location = useLocation();
    const [isAlbumReady, setIsAlbumReady] = useState(false);

    useEffect(() => {
        let options;
        if (location.state != null) {
            options = {
                method: 'GET',
                url: `player?albumId=${location.state.detail}`,

            };
        } else {
            options = {
                method: 'POST',
                params: { UserId: sessionStorage.getItem("userId") },
                url: '/account/playlist',

            };
        }
        // url: 'https://localhost:' + window.location.port + '/account/playlist',
        axios
            .request(options)
            .then(
                res => {
                    setSongs(res.data);
                    setIsAlbumReady(true);
                    console.log("isalbumready");
                })
    }, [location.state]);


    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        })
    }, [currentSongIndex, songs.length]);

    return (
        <div className="MusicPlayer" data-testid="music-player">
            {isAlbumReady ?
                <Player
                    currentSongIndex={currentSongIndex}
                    setCurrentSongIndex={setCurrentSongIndex}
                    nextSongIndex={nextSongIndex}
                    songs={songs}
                />
                :
                <div>:(</div>
            }
        </div>
    );
}

export default MusicPlayer;