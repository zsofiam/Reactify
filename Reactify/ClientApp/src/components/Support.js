import React from 'react';

import '../Support.css';


const Support = () => {

    return (
        <div className="support-container">
            <div id="wrapper">
                <div id="container">
                    <div id="left-col">
                        <div id="left-col-cont">
                            <h2>Developers</h2>
                            <div className="item">
                                <div className="img-col">
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/C4E03AQHXUTJfb2wjtA/profile-displayphoto-shrink_800_800/0/1632227417445?e=1638403200&v=beta&t=CtnZ4_qt1iS8xaA0TxRKj-qPwkzGOXbmQhHLzNfMKxQ"
                                        alt=""/>
                                </div>
                                <div className="meta-col">
                                    <h3>Csilla Hegedus</h3>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img-col">
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/C4D03AQE_aySuEYSCNQ/profile-displayphoto-shrink_800_800/0/1517452446867?e=1638403200&v=beta&t=JMvn6eX4-PmBWjk5VLzfGcdUkS40t2W7gHTrJUd9t6Y"
                                        alt=""/>
                                </div>
                                <div className="meta-col">
                                    <h3>Zsofia Matyasi</h3>

                                </div>
                            </div>
                            <div className="item">
                                <div className="img-col">
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/C5603AQHrKAAmyBO0xg/profile-displayphoto-shrink_800_800/0/1629454469695?e=1638403200&v=beta&t=sD_YfR88xbkG0vVcm0wuy2pQCQUhEmoqKtgSGQT0prc"
                                        alt=""/>
                                </div>
                                <div className="meta-col">
                                    <h3>Ferenc Jancsar</h3>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img-col">
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/C4D03AQEnA0YNEY2ZIw/profile-displayphoto-shrink_800_800/0/1626854811418?e=1638403200&v=beta&t=rr7hJVHjH0w5sxNjrhGIizjxT_jl6q_o4yxo5uiP0PM"
                                        alt=""/>
                                </div>
                                <div className="meta-col">
                                    <h3>Monika Bohm</h3>
                                </div>
                            </div>
                            <p id="total">Donation</p>
                            <h4 id="total-price"><span>$</span>10</h4>
                        </div>
                    </div>
                    <div id="right-col">
                        <h2>Support</h2>
                        <div id="logotype">
                            <img id="mastercard" src="http://emilcarlsson.se/assets/MasterCard_Logo.png" alt=""/>
                        </div>

                        <form action="">
                            <label for="">Cardnumber</label>
                            <div id="cardnumber">
                                <input type="number" max="4" max-length="4" min="4" placeholder="0123"/> <span
                                class="divider">-</span>
                                <input type="number" max="4" max-length="4" min="4" placeholder="4567"/> <span
                                class="divider">-</span>
                                <input type="number" max="4" max-length="4" min="4" placeholder="8901"/> <span
                                class="divider">-</span>
                                <input type="number" max="4" max-length="4" min="4" placeholder="2345"/>
                            </div>

                            <label for="">Cardholder</label>
                            <input id="cardholder" type="text" placeholder="John Doe"/>
                            <div class="left">
                                <label for="">Expiration Date</label>
                                <select name="month" id="month" onchange="" size="1">
                                    <option value="00">Month</option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <select name="year" id="year" onchange="" size="1">
                                    <option value="00">Year</option>
                                    <option value="01">2016</option>
                                    <option value="02">2017</option>
                                    <option value="03">2018</option>
                                    <option value="04">2019</option>
                                    <option value="05">2020</option>
                                    <option value="06">2021</option>
                                    <option value="07">2022</option>
                                    <option value="08">2023</option>
                                    <option value="09">2024</option>
                                    <option value="10">2025</option>
                                </select>
                            </div>

                            <div className="right">
                                <label id="cvc-label" for="">CVC <i className="fa fa-question-circle-o"
                                                                    aria-hidden="true"></i></label>
                                <input id="cvc" type="text" placeholder="123" maxlength="3"/>
                            </div>
                            <button id="purchase">Support Reactify</button>
                            <button id="paypal"><i className="fa fa-paypal" aria-hidden="true"></i> Pay with PayPal</button>
                            <p id="support">Having problem with checkout? <a href="/#">Contact our support</a>.</p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default Support;
