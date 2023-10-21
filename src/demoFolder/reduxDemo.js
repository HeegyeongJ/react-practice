const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'increment'){
        return{
            counter: state.counter + 1,
        }
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1
        }
    }
    return state;
}

const store = redux.createStore(counterReducer); // counterReducer로 변화를 주는 store

// console.log(store.getState()) store에 값이 제대로 들어있는지 확인 node reduxDemo.js

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}   

store.subscribe(counterSubscriber); // counterSubscriber 함수로 구독하기

store.dispatch({type: 'increment'}) // 1
store.dispatch({type: 'increment'}) // 2
store.dispatch({type: 'decrement'}) // 1