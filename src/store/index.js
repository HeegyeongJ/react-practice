import { configureStore, createSlice } from '@reduxjs/toolkit'
import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
})

// 인증 여부
const initialAuthState = {
  isAuthenticated: false
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
})

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

export default store;
