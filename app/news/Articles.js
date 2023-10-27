import React from 'react';

const Articles = ({news}) => {
    return (
        <div>
            <h2>{news.title}</h2>
            <p>{news.description}</p>
        </div>
    );
};

export default Articles;


