import React from 'react';

const Input = (props) => {
    const submitHandler = (e) => {
        e.preventDefault();

    }
    const focusHandler = () => {
        console.log('aaaaa');
    }
    const onchangeHandler = (e) => {
        props.getItems(e.target.value)
    }
    return (
        <form onSubmit={submitHandler}>
            <input type='text' onBlur={focusHandler} onChange={onchangeHandler}></input>
            <button>추가</button>
        </form>
    );
};

export default Input;