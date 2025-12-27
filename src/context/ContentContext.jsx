import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchAllContent } from '../services/googleSheets';
import defaultContent from '../data/content.json';

const ContentContext = createContext();

export const useContent = () => {
    return useContext(ContentContext);
};

export const ContentProvider = ({ children }) => {
    const [content, setContent] = useState(defaultContent);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadContent = async () => {
            try {
                const data = await fetchAllContent();
                setContent(data);
            } catch (err) {
                console.error("Failed to load content:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadContent();
    }, []);

    return (
        <ContentContext.Provider value={{ content, loading, error }}>
            {children}
        </ContentContext.Provider>
    );
};
