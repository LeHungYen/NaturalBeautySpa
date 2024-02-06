import style from './index.module.scss'

import Service from './Service'
import Product from './Product'

import { useState, useEffect } from 'react';
export function Home() {

    // check window width
    const [windowWidth, setWindowWidth] = useState(null);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    //end

    return (
        <div className={style.container}>
            <div className={style.service}>
                <Service windowWidth={windowWidth} />
            </div>

            <div className={style.product}>
                <Product windowWidth={windowWidth} />
            </div>
        </div>
    )
}