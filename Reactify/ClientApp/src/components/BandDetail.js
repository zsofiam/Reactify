import React, { useState } from 'react';

import Band from './Band.js';

const BandDetail = () => {
    const [searchedBand, setSearchedBand] = useState({
        "id": "1",
        "name": "Linkin Park",
        "genre": "Alternative Rock",
        "country": "California, USA",
        "website": "www.linkinpark.com",
        "biography": "Linkin Park is an American rock band from Agoura Hills, California, formed in 1996.",
    });

    return (
        <div>
            <Band bandData={searchedBand} />
        </div>
    )
}

export default BandDetail;