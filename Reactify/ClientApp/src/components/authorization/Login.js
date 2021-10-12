import React, {useState} from 'react';

export const Login = () => {
    return (
        <div>
            <form action="/authorization/login" method="POST">
                <div className="container">
                    <h1>Login</h1>
                    <p>Please fill in this form to log in.</p>

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

                    <button type="submit" className="registerbtn">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;