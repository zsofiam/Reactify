import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="contain">
                    <div className="col">
                        <h1>Support</h1>
                        <ul>
                            <a
                                href="https://instagram.com/"
                                target='_blank'
                                aria-label='Instagram'
                                rel="noopener noreferrer"
                            > <i className="fas fa-headset"></i>

                            </a>
                        </ul>
                    </div>
                    <div className="col social">
                        <h1>Social</h1>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/"
                                   aria-label='Facebook'
                                    rel="noopener noreferrer" target="_blank"
                                >
                                    <i className='fab fa-facebook-f'/>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/"
                                   target='_blank'
                                   aria-label='Instagram'
                                    rel="noopener noreferrer"
                                >
                                    <i className='fab fa-instagram'/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/"
                                   target='_blank'
                                   aria-label='Youtube'
                                    rel="noopener noreferrer"
                                >
                                    <i className='fab fa-youtube'/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/"
                                   target='_blank'
                                   aria-label='Youtube'
                                    rel="noopener noreferrer"
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