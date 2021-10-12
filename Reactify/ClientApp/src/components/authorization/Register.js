import React, {useState} from 'react';
import './Register.css';


export const Register = () => {

    return (
        <div>
            <form action="/authorization/register" method="POST">
                <div className="container">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat"
                           required/>


                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                    <button type="submit" className="registerbtn">Register</button>
                </div>

                <div className="container signin">
                    <p>Already have an account? Use the Login button above! </p>
                </div>
            </form>
        </div>
    )
}

export default Register;