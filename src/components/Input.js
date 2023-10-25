import React, { useRef, useState } from 'react';
import Items from './Items';

const Input = (props) => {
    const [items, setItems] = useState([]);
    const [blurIsValid, setBlurIsValid] = useState(true);
    const inputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        setItems(prevState=> [
            ...prevState,
            inputRef.current.value
        ]
        );
    }
    const focusHandler = (e) => {
        if(items.find(item=>item === e.target.value)) {
            setBlurIsValid(false);
            inputRef.current.focus();
            return;
        }else{
            setBlurIsValid(true);
        }

    }

    
    return (
        <>
            <form onSubmit={submitHandler}>
                <input type='text' onBlur={focusHandler} className={!blurIsValid ? 'invalid': null} ref={inputRef}></input>
                <button disabled={!blurIsValid}>추가</button>
            </form>
            <Items items={items}/>
        </>
    );
};

export default Input;