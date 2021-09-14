import React, { Component, useState } from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <>
            <div class="footer">
                <div class="contain">
                    <div class="col">
                        <h1>Support</h1>
                        <ul>
                            <li>Contact us</li>
                            <li>Web chat</li>
                            <li>Open ticket</li>
                        </ul>
                    </div>
                    <div class="col social">
                        <h1>Social</h1>
                        <ul>
                            <li>
                                <i className='fab fa-facebook-f' />
                            </li>
                            <li>
                                <i className='fab fa-instagram' />
                            </li>
                            <li>
                                <i className='fab fa-youtube' />
                            </li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </>
    );

}

export default Footer;