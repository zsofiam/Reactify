import React, {useEffect, useState} from "react";
import axios from "axios";
import './EventsList.css';
import Event from './Event.js';

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
<div className="events-div">
                <ul className="card-wrapper">
                    {events.map(event =>
                        <Event
                            key={event.Id}
                            event={event}
                        />
                    )}
                </ul>
</div>

    );

}

export default EventsList;
