import React, { useState } from 'react';

const UserContext = React.createContext();

export function UserProvider({ children }) {
    const [user, setUser ] = useState(null);
    const login = user => setUser(user);
    const logout = () => setUser(null);
    
    const userObject = { user, login, logout };

    return (
        <UserContext.Provider value={userObject}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;