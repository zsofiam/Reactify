import React, { useState } from 'react';
import axios from 'axios'; 
import Band from './Band.js';

import './BandDetail.css';

const BandDetail = () => {
    const [searchedBand, setSearchedBand] = useState({
        "name": "",
        "image": "",
        "genre": "",
        "country": "",
        "website": "",
        "biography": "",
    });

    const handleSubmit = () => {
        const inputData = document.getElementById("search-band-field").value;
        axios.post("band-detail", { "InputName": inputData })
            .then(response => {
                axios.get("band-detail")
                    .then(response => {
                        const bandDetails = response.data;
                        console.log(bandDetails);
                        setSearchedBand({
                            "name": bandDetails.name,
                            "image": bandDetails.image,
                            "genre": bandDetails.genre,
                            "country": bandDetails.country,
                            "website": bandDetails.website,
                            "biography": bandDetails.biography
                        });
                    });
            });


    }

    return (
        <div className="container artists">
            <div className="band-detail-search">
                <input type="text" name="searched-band-name" id="search-band-field" placeholder="Search for an artist..." />
                <button className="search-band" onClick={handleSubmit}><i className="fa fa-search" /></button>
            </div>
            <Band bandData={searchedBand} />
        </div>
    )
}

export default BandDetail;