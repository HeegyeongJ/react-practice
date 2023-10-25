import React from 'react';
import Todo from '../../models/todo';
import TodoItem from '../TodoItem';

type TodosProps = {
    items: Todo[],
}

const Todos: React.FC<TodosProps> = (props) => {
    return (
        <div>
            <ul>
                {props.items.map(item => <TodoItem text={ item.text } />)}
            </ul>
        </div>
    );
};

export default Todos;