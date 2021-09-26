import React, { useState, useEffect, useContext } from "react";
import { fetchEmails } from "./api";

const EmailContext = React.createContext();

export function EmailProvider({ children }) {
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentEmail, setCurrentEmail] = useState(null);

    // fetch emails on initial load
    useEffect(() => {
        setLoading(true);
        setError(null);
        fetchEmails()
        // .then(emails => setEmails([])) // set emails to empty array for debugging
        .then(emails => setEmails(emails))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, []);

    // pass all the state items into one object
    const emailObject = { emails, loading, error, currentEmail, setCurrentEmail };

    return (
        <EmailContext.Provider value={emailObject}>
            {children}
        </EmailContext.Provider>
    );
}

export function useEmail() {
    return useContext(EmailContext);
}