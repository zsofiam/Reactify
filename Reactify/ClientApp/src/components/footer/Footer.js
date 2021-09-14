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
                                <a href="https://www.facebook.com/"
                                    target='_blank'
                                    aria-label='Facebook'
                                    rel="noreferrer"
                                >
                                    <i className='fab fa-facebook-f' />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/"
                                    target='_blank'
                                    aria-label='Instagram'
                                    rel="noreferrer"
                                >
                                    <i className='fab fa-instagram' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/"
                                    target='_blank'
                                    aria-label='Youtube'
                                    rel="noreferrer"
                                >
                                    <i className='fab fa-youtube' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/"
                                    target='_blank'
                                    aria-label='Youtube'
                                    rel="noreferrer"
                                >
                                    <i className='fab fa-twitter' />
                                </a>
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