import Papa from 'papaparse';
import defaultContent from '../data/content.json';

// Placeholder ID - User needs to replace this
const SHEET_ID = '1fuUwFEayGH5KPs6Foa7IT_l67l8AcG3mtdS7fJSYCfw';

const TABS = {
    CONTENT: 'Content',
    INITIATIVES: 'Initiatives',
};

const fetchCSV = async (tabName) => {
    if (SHEET_ID === 'YOUR_GOOGLE_SHEET_ID') return null;

    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${tabName}&headers=1&t=${Date.now()}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const csvText = await response.text();
        return new Promise((resolve) => {
            Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => resolve(results.data),
                error: () => resolve(null),
            });
        });
    } catch (error) {
        console.error(`Error fetching ${tabName}:`, error);
        return null;
    }
};

const transformContent = (rows) => {
    if (!rows) return defaultContent;

    const newContent = JSON.parse(JSON.stringify(defaultContent)); // Deep copy

    rows.forEach(row => {
        const keyParts = row.Key.split('.'); // e.g., "hero.title"
        if (keyParts.length === 2) {
            const [section, field] = keyParts;
            if (newContent[section] && newContent[section][field] !== undefined) {
                newContent[section][field] = row.Value;
            }
        } else if (keyParts.length === 3 && keyParts[1] === 'objectives') {
            // Handle objectives array: about.objectives.0.title
            const [section, arrayName, indexStr] = keyParts;
            const index = parseInt(indexStr);
            const field = row.Key.split('.').pop(); // title or description

            if (newContent[section][arrayName][index]) {
                newContent[section][arrayName][index][field] = row.Value;
            }
        }
    });

    return newContent;
};

const transformInitiatives = (rows) => {
    if (!rows) return defaultContent.initiatives;

    const initiatives = {
        previous: [],
        upcoming: []
    };

    rows.forEach(row => {
        // console.log("Processing row:", row); // Debugging
        const initiative = {
            id: row.id,
            title: row.title,
            description: row.description,
            fullContent: row.fullContent,
            date: row.date,
            images: row.images ? row.images.split(',').map(img => img.trim()) : []
        };

        if (row.type === 'upcoming') {
            initiatives.upcoming.push(initiative);
        } else {
            initiatives.previous.push(initiative);
        }
    });

    return initiatives;
};

export const fetchAllContent = async () => {
    const [contentRows, initiativeRows] = await Promise.all([
        fetchCSV(TABS.CONTENT),
        fetchCSV(TABS.INITIATIVES)
    ]);

    console.log("Raw Initiative Rows:", initiativeRows);

    // If no sheet ID or error, return default content
    if (!contentRows && !initiativeRows) {
        console.warn("Using default content (Sheet ID missing or fetch failed)");
        return defaultContent;
    }

    const mergedContent = transformContent(contentRows);
    if (initiativeRows) {
        mergedContent.initiatives = transformInitiatives(initiativeRows);
        console.log("Transformed Initiatives:", mergedContent.initiatives);
    }

    return mergedContent;
};
