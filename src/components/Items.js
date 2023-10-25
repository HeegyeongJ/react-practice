import React from 'react';

const Items = ({items}) => {
    return (
        
        <ul>
            {items.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};

export default Items;