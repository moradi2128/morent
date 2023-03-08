import { useState, useEffect } from 'react';


export default function useWindowDimensions() {
    const getWindowDimensions = ()=> {
        const hasWindow = typeof window !== 'undefined';
        // const { innerWidth: width, innerHeight: height } = hasWindow;
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height
        };
    }
        // console.log('window :>> ', hasWindow);
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }