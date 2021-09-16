import React from 'react';

const Event = (props) => {

    const { id,img,band,genre,date,venue,url } = props.event;
    return (

        <tr>
            <td><img src={img} /> </td>
            <td>{band}</td>
            <td>
            {genre.map((genreItem, i) => [
                i > 0 && ", ",
                <span key={i}>{genreItem}</span>
            ])}
            </td>
            <td>{date}</td>
            <td>{venue}</td>
            <td><a href={url} target="_blank" >Buy Ticket</a></td>
        </tr>
        
    )
}

export default Event;