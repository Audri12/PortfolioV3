import React, { useState, useEffect } from 'react';

const ConnectionsCounter = () => {
    const [count, setCount] = useState(0);
    const target = 20000;

    useEffect(() => {
        let start = 0;
        const duration = 2000; // Duration in milliseconds
        const increment = target / (duration / 16);

        const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
                clearInterval(counter);
                setCount(target);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);

        return () => clearInterval(counter);
    }, [target]);

    return (
        <div className='mt-6 text-start'>
            <div className='border border-white flex items-center w-fit p-4 rounded-lg bg-white bg-opacity-30'>
                <span className='text-4xl mr-2 font-bold min-w-[11rem]'>{count.toLocaleString()}+</span>
                <p className='text-white leading-tight'>Connections <br /> Across Bangladesh</p>
            </div>
        </div>
    );
};

export default ConnectionsCounter;
