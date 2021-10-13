import React, { createContext, useState } from 'react';

export const UserContext = createContext(false);

export const UserProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);

    const userLoggedIn = () => {
        setIsLogged(true);
    }

    const userLoggedOut = () => {
        setIsLogged(false);
    }
    return <UserContext.Provider value={{ isLogged, userLoggedIn, userLoggedOut }}>
        {children}

    </UserContext.Provider>
}