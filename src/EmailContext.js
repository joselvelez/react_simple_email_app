import React, { useState } from "react";

const EmailContext = React.createContext();

export function EmailProvider({ children }) {
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentEmail, setCurrentEmail] = useState(null)

    const emailObject = { emails, loading, error, currentEmail };

    return (
        <EmailContext.Provider value={emailObject}>
            {children}
        </EmailContext.Provider>
    );
}

