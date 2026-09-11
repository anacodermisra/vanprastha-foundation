import React, { createContext, useContext } from 'react';
// Google Sheets service removed in favor of local data
import defaultContent from '../data/content.json';

const ContentContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useContent = () => {
    return useContext(ContentContext);
};

export const ContentProvider = ({ children }) => {
    // Simplified: Directly loading local JSON. No async logic needed.
    const content = defaultContent;
    const loading = false;
    const error = null;

    return (
        <ContentContext.Provider value={{ content, loading, error }}>
            {children}
        </ContentContext.Provider>
    );
};
