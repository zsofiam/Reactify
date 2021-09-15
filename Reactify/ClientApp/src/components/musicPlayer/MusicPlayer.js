import axios from "axios";
import React, { useEffect, useState } from 'react';
import './MusicPlayer.css';
import Player from './Player.js';
import { useLocation, useHistory } from "react-router-dom";

const MusicPlayer = (detail) => {
    /*const [songs, setSongs] = useState();*/
    const [songs] = useState([
        {
            title: "Test title",
            artist: "Test artist",
            img: "./images/dubstep.jpg",
            src: "./music/bensound-dubstep.mp3"
        },

        {
            title: "Test epic title",
            artist: "Test epic artist",
            img: "./images/epic.jpg",
            src: "./music/bensound-epic.mp3"
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
    const location = useLocation();

    useEffect(() => {
        axios
            .get(`player?albumId=${location.state.detail}`)
            .then(
                res => {
                    /*         setSongs(res.data)*/
                    console.log(location.state.detail)
                })
    }, [])


    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        })
    }, [currentSongIndex])

    return (
        <div className="MusicPlayer">
            <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}

            />
        </div>
    );

}

export default MusicPlayer;