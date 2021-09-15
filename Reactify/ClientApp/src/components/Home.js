import React, { Component } from 'react';
import '../custom.css';

const Home = () => {

    return (
        <>
            <div className="background-container" data-testid="background-video">
                <video autoPlay loop muted>
                    <source src="./video/home.mp4" type="video/mp4" />
                </video>
            </div>
        </>
    );

}

export default Home;
