import axios from "axios";
import React, { useEffect, useState } from 'react';
import './MusicPlayer.css';
import Player from './Player.js';
import { useLocation, useHistory } from "react-router-dom";

const MusicPlayer = (detail) => {
    const [songs, setSongs] = useState({});

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
    const location = useLocation();
    const [isAlbumReady, setIsAlbumReady] = useState(false);

    useEffect(() => {
        axios
            .get(`player?albumId=${location.state.detail}`)
            .then(
                res => {
                    setSongs(res.data);
                    setIsAlbumReady(true);
                })
    }, []);


    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        })
    }, [currentSongIndex]);

    return (
        <div className="MusicPlayer">
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