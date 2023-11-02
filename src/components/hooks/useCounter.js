import React, { useEffect, useState } from 'react';

const useCounter = (isForward) => { // boolean type의 인자, forward일때는 1, 아니면 -1
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1*(isForward ? 1 : -1));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter; 
};

export default useCounter;