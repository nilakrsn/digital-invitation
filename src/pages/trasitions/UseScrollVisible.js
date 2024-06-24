import { useState, useEffect } from 'react';

const UseScrollVisible = (elementId) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const targetElement = document.getElementById(elementId);
            if (targetElement) {
                const { top, bottom } = targetElement.getBoundingClientRect();
                const isHalfShown = top < window.innerHeight && bottom >= 0;
                setIsVisible(isHalfShown);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [elementId]);

    return isVisible;
};

export default UseScrollVisible;
