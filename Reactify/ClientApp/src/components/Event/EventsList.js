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
    //
    // <div className="container" id="event-table-container">
    //     <div className="events-container">
    //         <table className='table table-striped' aria-labelledby="tabelLabel">
    //             <thead>
    //             <tr>
    //                 <th className="first-event-column"></th>
    //                 <th>Band</th>
    //                 <th>Genre</th>
    //                 <th>Date</th>
    //                 <th>Venue</th>
    //                 <th></th>
    //             </tr>
    //             </thead>
    //             <tbody>
    //             {events.map(event =>
    //
    //                 <Event
    //                     key={event.Id}
    //                     event={event}
    //                 />
    //             )}
    //             </tbody>
    //         </table>
    //
    //     </div>
    //
    // </div>
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
