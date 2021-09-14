import React from 'react';
import { Link } from 'react-router-dom';

const Band = (props) => {

    return (
        <div>
            <p>{props.bandData.name}</p>
            <p>{props.bandData.genre}</p>
            <p>{props.bandData.country}</p>
            <p>{props.bandData.biography}</p>
        </div>
    )
}

export default Band;