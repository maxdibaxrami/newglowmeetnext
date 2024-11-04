import { useEffect } from 'react';

const useKeyboardHandler = () => {
    useEffect(() => {
        const handleResize = () => {
            // Dynamically set the viewport height variable
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);

            // Check if the window height is reduced, which indicates the keyboard is open
            if (window.innerHeight < 500) { // 500px is an example, adjust as needed
                document.body.classList.add('keyboard-open');
            } else {
                document.body.classList.remove('keyboard-open');
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
};

export default useKeyboardHandler;