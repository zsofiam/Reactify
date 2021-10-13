import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const Login = () => {

    const [isLoginSuccessfull, setIsLoginSuccessfull] = useState(false);
    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Password');


    const firstInputArea = (e) => {
        setEmail(e.target.value);
    }
    const secondInputArea = (e) => {
        setPassword(e.target.value);
    }


    const tryLogIn = (event) => {
        event.preventDefault();
        let axios = require("axios").default;

        let options = {
            method: 'POST',
            params: { Email: email, Password: password },
            url: 'https://localhost:' + window.location.port + '/authorization/login',

        };

        axios
            .request(options)
            .then(function (response) {
                if (response.status === 200) setIsLoginSuccessfull(true);
                else { setIsLoginSuccessfull(false); }

            })
            .catch(function (error) {
                console.error(error);
            });
    }



    return (
        <div className="registration-container">

            {isLoginSuccessfull ? <p>You are logged in.</p> :

                <form onSubmit={tryLogIn}>
                    <div>
                        <h1>Login</h1>
                        <p>Please fill in this form to log in.</p>

                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" id="email" required value={email} onChange={firstInputArea} />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" id="psw" required value={password} onChange={secondInputArea} />

                        <button type="submit" className="registerbtn">Login</button>
                    </div>
                </form>
            }
        </div>
    )
};

export default Login;