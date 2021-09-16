import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import './EventsList.css';

const EventsList = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios
            .get("event")
            .then((res) =>
                setEvents(res.data)
            );
    }, []);

    return (
        <>
            <div className="events-container">
        <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th></th>
                        <th>Band</th>
                        <th>Genre</th>
                        <th>Date</th>
                        <th>Venue</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event =>


                        <tr key={event.id}>
                            <td><img src={event.img}/ > </td>
                            <td>{event.band}</td>
                            <td>{event.genre}</td>
                            <td>{event.date}</td>
                            <td>{event.venue}</td>
                            <td><a href={event.url} target="_blank" >Buy Ticket</a></td>
                        </tr>
                    )}
            </tbody>
            </table>

                </div>

            </>
    );

}

export default EventsList;
