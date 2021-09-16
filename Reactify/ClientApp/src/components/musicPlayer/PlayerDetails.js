import React from 'react';

const PlayerDetails = (props) => {

    return (
        <div className="c-player--details">
            <div className="details-img">
                <img src={props.song.image} alt=""/>
            </div>
            <h3 className="details-title">{props.song.title}</h3>
            <h4 className="details-artist">{props.song.artistName}</h4>

        </div>
    );

}

export default PlayerDetails;