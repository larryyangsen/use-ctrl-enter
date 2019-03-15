import * as React from 'react';

const { useEffect, useRef, useState } = React;

const useCtrlEnter = () => {
    const ref = useRef({} as HTMLInputElement);
    const [isCtrlEnter, setIsCtrlEnter] = useState(false);
    useEffect(() => {
        const keyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.keyCode === 13) {
                return setIsCtrlEnter(true);
            }
            setIsCtrlEnter(false);
        };
        ref.current.addEventListener('keydown', keyDown, { passive: true });
        return () => {
            ref.current.removeEventListener('keydown', keyDown);
        };
    }, []);

    return { ref, isCtrlEnter };
};

export default useCtrlEnter;
