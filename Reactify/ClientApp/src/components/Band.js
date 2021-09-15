import React from 'react';

const Band = (props) => {

    return (
        <div className="band-details">
            <img classname="band-banner" src={props.bandData.image} alt="picture about the band logo" />
            <p className="band-info">Genre: {props.bandData.genre}</p>
            <p className="band-info">Country: {props.bandData.country}</p>
            <p className="band-info">Biograpy:</p>
            <p className="band-info biography">{props.bandData.biography}</p>
        </div>
    )
}

export default Band;