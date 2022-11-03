import React from 'react';

export const Home = () => {
    const arr = [4, 3, 2, 1];

    for (let value of arr) {
        console.log('value', value);
    }
    return (
        <div>
            <h1>Welcome to next js</h1>
        </div>
    );
};

