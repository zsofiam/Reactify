import React, { Component, useState, useEffect } from 'react';
import Player from './Player.js';

const MusicPlayer = () => {
    const [songs, setSongs] = useState([
        {
            title: "Test title",
            artist: "Test artist",
            img: "./images/dubstep.jpg",
            src: "./music/bensound-dubstep.mp3"
        },

        {
            title: "Test title2",
            artist: "Test artist2",
            img: "./images/dubstep.jpg",
            src: "./music/bensound-dubstep.mp3"
        },

        {
            title: "Test title3",
            artist: "Test artist3",
            img: "./images/dubstep.jpg",
            src: "./music/bensound-dubstep.mp3"
        }
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);


    return (
        <div className="MusicPlayer">
            <Player
                song={songs[currentSongIndex]}
                nextSong={songs[nextSongIndex]}
            />
        </div>
    );

}

export default MusicPlayer;