import React from 'react';

const Event = (props) => {

    const {img, band, genre, date, venue, url} = props.event;
    return (
        <li className="card">
            <img src={img} alt="event"/>
            <button className="events-button"><span><a target="_blank" rel="noopener noreferrer" href={url}> <i className="fas fa-credit-card"/> Buy ticket</a> </span>
            </button>
            <h3><a href={url}>{band}</a></h3>
            <h3> {date}</h3>
            <p>{venue}</p>
            <p>{genre}</p>

        </li>
    )
}

export default Event;