import React, { useEffect, useState } from 'react';

const CounterSection = () => {
    const counters = [
        { end: 20, label: 'Years of Experience' },
        { end: 22, label: 'Certifications' },
        { end: 35, label: 'Awards Winner' },
        { end: 300, label: 'Projects Completed' },
    ];

    return (
        <div className='grid grid-cols-2 sm:grid-cols-4 text-center text-white border rounded-lg p-4 gap-6 mt-2'>
            {counters.map((counter, index) => (
                <Counter key={index} end={counter.end} label={counter.label} />
            ))}
        </div>
    );
};

const Counter = ({ end, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16); // Approx. 60fps
        
        const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(counter);
                setCount(end);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16); // Update every 16ms for smooth animation
        
        return () => clearInterval(counter);
    }, [end]);

    return (
        <div>
            <h3 className='text-2xl font-bold'>{count}+</h3>
            <p>{label}</p>
        </div>
    );
};

export default CounterSection;
