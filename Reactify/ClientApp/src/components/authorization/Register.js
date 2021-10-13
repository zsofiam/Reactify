import React, { useState } from 'react';
import './Register.css';


export const Register = () => {

    const [isRegistrationDone, setIsRegistrationDone] = useState(false);

    const RegistrationReady = () => {
        setIsRegistrationDone(true);
    };

    return (
        <div className="registration-container">

            {isRegistrationDone ? <p>Done</p> :

                <form action="/authorization/register" method="POST">
                    <div>
                        <h1>Register</h1>
                        <p>Please fill in this form to create an account.</p>

                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" id="email" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" id="psw" required />

                        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="password2" id="psw-repeat"
                            required />


                        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                        <button type="submit" className="registerbtn" onClick={() => RegistrationReady()}>Register</button>
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