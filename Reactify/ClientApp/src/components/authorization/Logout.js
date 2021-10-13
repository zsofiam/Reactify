import React, { useContext, useState } from 'react';
import { UserContext } from "../../context/user";

export const Logout = () => {

    const user = useContext(UserContext);


    return (
        <div className="registration-container">

            <p>You are logged out.</p>


        </div>
    )
};

export default Logout;