import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import './TrackList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

const TrackList = (detail) => {
    const [songs, setSongs] = useState();
    const location = useLocation();
    const [isResultAvailable, setResultAvailable] = useState(false);


    useEffect(() => {
        axios
            .get(`track?track=${location.state.detail}`)
            .then(
                res => {
                    setSongs(res.data)
                    setResultAvailable(true);
                })
        console.log(songs);
    }, [])


    const history = useHistory();
    const goToPlayer = () => history.push({
        pathname: "/player",
        state: { detail: document.getElementById("song").id }
    });


    return (

        <div className="container">
            {isResultAvailable ?
                <ul className="list">

                    {songs.map(song => (

                        <li className="num" onClick={goToPlayer} data-id={song.id} id="song">
                            <h3><img src={song.album.cover} alt="" /></h3>
                            <h3> <strong> {song.title}</strong></h3>
                            <h3>{song.artist.name}</h3>
                        </li>
                    )
                    )}

                </ul>
                : <></>
            }
        </div >
    )
}

export default TrackList;