import React, { createContext, useContext, useState, useEffect } from 'react';
import defaultContent from '../data/content.json';

const ContentContext = createContext();

export const useContent = () => {
    return useContext(ContentContext);
};

export const ContentProvider = ({ children }) => {
    const [lang, setLang] = useState('en');

    // Derive content synchronously without effect
    const content = defaultContent[lang] || defaultContent['en'];
    const loading = false;
    const error = null;

    return (
        <ContentContext.Provider value={{ content, lang, setLang, loading, error }}>
            {children}
        </ContentContext.Provider>
    );
};
