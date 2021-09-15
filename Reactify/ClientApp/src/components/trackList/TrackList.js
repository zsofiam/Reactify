import React, {useState} from 'react';

const TrackList = () => {
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
        }
    ]);
    
    return(
        <div className="container">
            <ul>
                {songs.map(song => (
                    <li><h3> <img src={song.img}  alt="bob"/> {song.artist} {song.title} </h3></li>
                    )
                )}
            </ul>
        </div>
    ) 
}

export default TrackList;