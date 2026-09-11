import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles = {
    '/': 'Vanprastha Foundation | Himalayan Ecological Restoration, Education & Rural Welfare NGO',
    '/contribute': 'Contribute & Donate | Vanprastha Foundation (80G Tax Exempt)',
    '/volunteer': 'Volunteer Registration | Vanprastha Foundation',
    '/awards': 'Awards & Recognition | Vanprastha Foundation',
    '/awards-and-recognition': 'Awards & Recognition | Vanprastha Foundation',
    '/media': 'Media, News & Gallery | Vanprastha Foundation',
    '/governance': 'Governance & Transparency | Vanprastha Foundation',
    '/faq': 'Frequently Asked Questions | Vanprastha Foundation',
    '/privacy-policy': 'Privacy Policy | Vanprastha Foundation',
    '/terms-and-conditions': 'Terms & Conditions | Vanprastha Foundation',
    '/refund-policy': 'Refund Policy | Vanprastha Foundation',
};

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        if (routeTitles[pathname]) {
            document.title = routeTitles[pathname];
        } else if (pathname.startsWith('/initiative/')) {
            const rawName = pathname.replace('/initiative/', '').replace(/-/g, ' ');
            const formatted = rawName.charAt(0).toUpperCase() + rawName.slice(1);
            document.title = `${formatted} | Vanprastha Foundation`;
        } else {
            document.title = 'Vanprastha Foundation | Himalayan Ecological Restoration & Welfare NGO';
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
