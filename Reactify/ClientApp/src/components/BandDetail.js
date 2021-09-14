import React, { useState } from 'react';

import Band from './Band.js';

const BandDetail = () => {
    const url = "https://www.theaudiodb.com/api/v1/json/1/search.php?s=linkin_park";
    const [searchedBand, setSearchedBand] = useState({
        "id": "1",
        "name": "Linkin Park",
        "image": "https://images.unsplash.com/photo-1528645602411-bbeb0d69a6de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        "genre": "Alternative Rock",
        "country": "California, USA",
        "website": "www.linkinpark.com",
        "biography": "Linkin Park is an American rock band from Agoura Hills, California, formed in 1996.",
    });

       

    return (
        <div>
            <form action="/band-detail" method="post">
                <input type="text" name="searched-band-name" />
                <input type="submit" class="search-band" value="Search" />
            </form>
            <Band bandData={searchedBand} />
        </div>
    )
}

export default BandDetail;