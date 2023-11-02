import React, { useCallback, useState } from 'react';

const useHttp = () => { // 이 함수도 매번 불릴때마다 생성
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [tasks, setTasks] = useState([]); fetch 요청 관련 없는 것 빼주기

    const sendRequest = useCallback(async (requestConfig, applyData) => { // 매번 생성될 필요 없다
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
    }, [])
    return {
        isLoading,
        error,
        sendRequest
    }
};

export default useHttp;