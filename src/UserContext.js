import React, { useState, useContext } from 'react';
import { FAKE_USER } from './api';

const UserContext = React.createContext();

export function UserProvider({ children }) {
    const [user, setUser ] = useState(FAKE_USER);
    const login = user => setUser(user);
    const logout = () => setUser(null);
    
    const userObject = { user, login, logout };

    // the above user state and provider object
    // are passed down through this provider
    return (
        <UserContext.Provider value={userObject}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const { user } = useContext(UserContext);
    return user;
}

export function useUserActions() {
    const { login, logout } = useContext(UserContext);
    return { login, logout };
}
