import React, {useEffect, useRef, useState} from 'react';
import PlayerDetails from './PlayerDetails.js';
import PlayerControls from './PlayerControls';
import axios from 'axios';
import { UserContext } from "../../context/user";

const Player = (props) => {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLikedSong, setIsLikedSong] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const LikeSong = () => {
        console.log("likeMusic");
        console.log(props.songs[props.currentSongIndex]);
        
        if (isLikedSong) setIsLikedSong(false);
        else {
            setIsLikedSong(true);
        };
        console.log(sessionStorage.getItem("userId"));
        
        axios.post("tracklist", {
            "UserId": sessionStorage.getItem("userId"),
            "Id": props.songs[props.currentSongIndex]["id"],
            "Title": props.songs[props.currentSongIndex]["title"],
            "Duration": props.songs[props.currentSongIndex]["duration"],
            "ReleaseDate": props.songs[props.currentSongIndex]["releaseDate"],
            "Preview": props.songs[props.currentSongIndex]["preview"],
            "Image": props.songs[props.currentSongIndex]["image"],
            "Artist": props.songs[props.currentSongIndex]["artist"],
            "ArtistName": props.songs[props.currentSongIndex]["artistName"],
            "Album": props.songs[props.currentSongIndex]["album"]
        })
            .then(response => {
                console.log("Added track to favourites");
            });
        
    };


    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }


    return (
        <div className="c-player">
            <audio src={props.songs[props.currentSongIndex].preview} ref={audioEl}/>
            <h4>Playing now</h4>
            <PlayerDetails song={props.songs[props.currentSongIndex]}/>
            <div className="heart-icon">
                <button className="like-btn" onClick={() => LikeSong()}>
                    {isLikedSong ? <i class="fas fa-heart"></i> : <i class="far fa-heart"></i>}
                </button>
            </div>
            <PlayerControls isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            SkipSong={SkipSong}/>
            <p><strong>Next up:</strong>
                {props.songs[props.nextSongIndex].title}
            </p>
        </div>
    );

}

export default Player;