'use client'

import { useEffect, useState } from "react";
import { VscScreenFull } from "react-icons/vsc";

function FullScreen() {
    const [isFullScreen, setIsFullScreen] = useState<boolean | null>(null);

    const goFullScreen = () => {
        const element = document.documentElement;

        if (element.requestFullscreen) {
            element.requestFullscreen();
            setIsFullScreen(true);
            localStorage.setItem('isFullScreen', 'true');
        }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            goFullScreen();
        }
    };

    useEffect(() => {
        const storedValue = localStorage.getItem('isFullScreen');

        setIsFullScreen(storedValue === 'true');

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


    if (isFullScreen === null || isFullScreen) return null;

    return (
        (
            <div
                onClick={goFullScreen}
                className="bg-[var(--main-bg)]/80 fixed top-0 left-0 w-screen h-screen cursor-zoom-in flex items-center justify-center text-center flex-col gap-4 text-white z-50"
            >
                <VscScreenFull size={56} />
                <p className="text-2xl font-bold uppercase word-wrap">
                    Please click or enter to full screen mode
                </p>
            </div>
        )
    );
}

export default FullScreen;
