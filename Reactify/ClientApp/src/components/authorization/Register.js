import React, { useContext, useState } from 'react';
import './Register.css';
import { UserContext } from "../../context/user";
import { useHistory } from 'react-router-dom';



export const Register = () => {

    const [isRegistrationDone, setIsRegistrationDone] = useState(false);
    const [email, setEmail] = useState('Email');
    const [password1, setPassword1] = useState('Password2');
    const [password2, setPassword2] = useState('Password1');
    const history = useHistory();

    const emailInputArea = (e) => {
        setEmail(e.target.value);
    }

    const password1InputArea = (e) => {
        setPassword1(e.target.value);
    }

    const password2InputArea = (e) => {
        setPassword2(e.target.value);
    }

    const user = useContext(UserContext);


    const RegistrationReady = (event) => {
        event.preventDefault();

        let axios = require("axios").default;

        let options = {
            method: 'POST',
            params: { Email: email, Password: password1, Password2: password2 },
            url: 'https://localhost:' + window.location.port + '/authorization/register',

        };

        axios
            .request(options)
            .then(function (response) {

                if (response.data != null) {
                    setIsRegistrationDone(true);
                    user.userLoggedIn();
                    sessionStorage.setItem("userId", response.data);
                    history.push("/");
                }
                else { setIsRegistrationDone(false); }

            })
            .catch(function (error) {
                console.error(error);
            });
    };

    return (
        <div className="registration-container">

            {isRegistrationDone ? <p>Registration successful.</p> :

                <form onSubmit={RegistrationReady}>
                    <div>
                        <h1>Register</h1>
                        <p>Please fill in this form to create an account.</p>

                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" id="email" required value={email}
                            onChange={emailInputArea} />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" id="psw" required value={password1}
                            onChange={password1InputArea}
                        />

                        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="password2" id="psw-repeat"
                            required value={password2} onChange={password2InputArea} />


                        <p>By creating an account you agree to our <a href="/#">Terms & Privacy</a>.</p>
                        <button type="submit" className="registerbtn">Register</button>
                    </div>

                    <div className="container-signin">
                        <p>Already have an account? Use the Login button above! </p>
                    </div>
                </form>
            }
        </div>
    )
}

export default Register;