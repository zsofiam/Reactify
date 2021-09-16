import React from 'react';
import './BandDetail.css';

const Band = (props) => {

    return (
        <>
            {props.bandData.name !== '' ?
            <div className="band-details">
                <div classname="band-banner">
                    <img src={props.bandData.image} alt="picture about the band logo" />
                </div>
                <p className="band-info"><strong>Genre:</strong> {props.bandData.genre}</p>
                <p className="band-info"><strong>Country:</strong> {props.bandData.country}</p>
                <p className="band-info"><strong>Biograpy:</strong></p>
                <p className="band-info biography">{props.bandData.biography}</p>
            </div >
            :
            <div className="band-empty">
                <p>Search for the name of an artist to see the result</p>
            </div>
            }
        </>
    )
}

export default Band;