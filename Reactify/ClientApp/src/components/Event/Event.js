import React from 'react';

const Event = (props) => {

    const { id, img, band, genre, date, venue, url } = props.event;
    return (

        // <tr>
        //     <td className="first-event-column"><img className="event-img" src={img} alt="event" /></td>
        //     <td>{band}</td>
        //     <td>
        //         {genre.map((genreItem, i) => [
        //             i > 0 && ", ",
        //             <span key={i}>{genreItem}</span>
        //         ])}
        //     </td>
        //     <td>{date}</td>
        //     <td>{venue}</td>
        //     <td><a class="event-link" href={url} target="_blank">Buy Ticket</a></td>
        // </tr>
       <li class="card">
        <img src={img} alt="event"/>
           <button className="events-button"><span><a target="_blank" href={url}> <i className="fas fa-credit-card"/> Buy ticket</a> </span></button>
           <h3><a href={url}>{band}</a></h3>
           <h3> {date}</h3>
           <p>{venue}</p>
           <p>{genre}</p>

       </li>
    )
}

export default Event;