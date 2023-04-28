import React from 'react';
import { ACTIONS } from './App1';

const Todo1 = ({ todo, dispatcher}) => {
    return (
        <div>
            <span style={{ color: todo.complete ? '#AAA' : '#000' }}>{todo.name}</span>
            <button onClick={() => dispatcher({ type: ACTIONS.TOOGLE_TODO, id: todo.id})}>Done</button>
            <button onClick={() => dispatcher({ type: ACTIONS.DELETE_TODOs, id: todo.id })}>DELETE</button>
        </div>
    )
}

export default Todo1;