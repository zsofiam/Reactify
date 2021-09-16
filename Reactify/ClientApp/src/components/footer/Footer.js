import React, {Component, useState} from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="contain">
                    <div className="col">
                        <h1>Support</h1>
                        <ul>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className="col social">
                        <h1>Social</h1>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/"
                                   aria-label='Facebook'
                                   rel="noreferrer" target="_blank"
                                >
                                    <i className='fab fa-facebook-f'/>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/"
                                   target='_blank'
                                   aria-label='Instagram'
                                   rel="noreferrer"
                                >
                                    <i className='fab fa-instagram'/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/"
                                   target='_blank'
                                   aria-label='Youtube'
                                   rel="noreferrer"
                                >
                                    <i className='fab fa-youtube'/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/"
                                   target='_blank'
                                   aria-label='Youtube'
                                   rel="noreferrer"
                                >
                                    <i className='fab fa-twitter'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"/>
                </div>
            </div>
        </>
    );

}

export default Footer;