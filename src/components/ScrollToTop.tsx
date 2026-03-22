import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant', // Use 'instant' for immediate snap, or 'smooth' if desired.
        });
    }, [pathname]);

    return null;
}
