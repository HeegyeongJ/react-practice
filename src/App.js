import React, { useCallback, useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/useHttp';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = useCallback((taskObj) => {
    const loadedTasks = [];

    for (const taskKey in taskObj) {
      loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
    }

    setTasks(loadedTasks);
  },[]) // taskObj 매번 새롭게 들어오면 어차피 값이 변경돼서 transformTasks 를 매번 생성해 줄 필요 X

 

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();
  // sendRequest: fetchTasks == sendRequest의 이름 바꾸기
  

  useEffect(() => {
    fetchTasks({ url: 'https://react-test-cf689-default-rtdb.firebaseio.com/tasks.json' }, transformTasks);
  }, [fetchTasks]); // 의존성 안해주면 안에 값이 바뀌어도 처음 값을 계속 사용하기 때문에 

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
