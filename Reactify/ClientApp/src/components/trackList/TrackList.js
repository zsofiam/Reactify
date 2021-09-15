import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

const TrackList = (detail) => {
    const [songs, setSongs] = useState();
    const location = useLocation();
    const [isResultAvailable, setResultAvailable] = useState(false);


    useEffect(() => {
        axios
            .get(`track?track=${location.state.detail}`)
            .then(
                res => {
                    console.log(res);
                    setSongs({
                        id: res.data.id,
                        title: res.data.title,
                        duration: res.data.duration,
                        releaseDate: res.data.releaseDate,
                        preview: res.data.preview,
                    })
                    setResultAvailable(true);
                })
        console.log(songs);
    }, [])

    return (
        <div className="container">

            {isResultAvailable ?
                <ul>

                    <li>
                        <h3> {songs.title} </h3>
                    </li>

                </ul>
                : <></>
            }
        </div>
    )
}

export default TrackList;