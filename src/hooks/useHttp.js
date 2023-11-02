import React, { useState } from 'react';

const useHttp = (requestConfig, applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [tasks, setTasks] = useState([]); fetch 요청 관련 없는 것 빼주기

    const sendRequest = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                requestConfig.url, {
                    method: requestConfig?.method ? requestConfig.method : 'GET', // 메서드 값이 있으면 method 값을 넣어주고 없으면 get 요청을 받음
                    headers: requestConfig?.headers ? requestConfig.headers : {},
                    body: requestConfig?.body ? requestConfig.body : null
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();

            // const loadedTasks = [];

            // for (const taskKey in data) {
            //     loadedTasks.push({ id: taskKey, text: data[taskKey].text });
            // }

            // setTasks(loadedTasks);

            applyData(data);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    };
    return {
        isLoading,
        error,
        sendRequest
    };
};

export default useHttp;