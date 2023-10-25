import React, { useRef } from 'react';

const NewTodo: React.FC<{onAddTodo: (text:string)=>void}> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // 에러 반환
            return;
        }
        props.onAddTodo(enteredText);
    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">투두 텍스트</label>
            <input type="text" id='text' ref={todoTextInputRef} />
            <button>투두 더하기</button>
        </form>
    );
};

export default NewTodo;