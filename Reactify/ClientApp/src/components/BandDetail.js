import React, { useState } from 'react';
import axios from 'axios';

import Band from './Band.js';

const BandDetail = () => {
    const [searchedBand, setSearchedBand] = useState({
        "name": "Linkin Park",
        "image": "https://images.unsplash.com/photo-1528645602411-bbeb0d69a6de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        "genre": "Alternative Rock",
        "country": "California, USA",
        "website": "www.linkinpark.com",
        "biography": "Linkin Park is an American rock band from Agoura Hills, California, formed in 1996.",
    });

    const handleSubmit = () => {
        const inputData = document.getElementById("search-band-field").value;
        axios.post("band-detail", inputData)
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

    //const handleSubmit = () => {
    //    console.log("fetch");
    //    axios.get('band-detail')
    //        .then((response) => {
    //            const bandDetails = response.data;
    //            console.log(bandDetails);
    //            setSearchedBand({
    //                "name": bandDetails.name,
    //                "image": bandDetails.image,
    //                "genre": bandDetails.genre,
    //                "country": bandDetails.country,
    //                "website": bandDetails.website,
    //                "biography": bandDetails.biography
    //            })
    //        })
        
        
    //}

    return (
        <div>
            <input type="text" name="searched-band-name" id="search-band-field"/>
            <button className="search-band" onClick={handleSubmit}>Search</button>

            <Band bandData={searchedBand} />
        </div>
    )
}

export default BandDetail;