import React from 'react';
import {ACTIONS} from './App';

const ToDo = ({ todo, dispatcher}) => {
    
    return (
    <div>
         <span style={{color: todo.complete ? '#AAA' : '#000'}}>{todo.name}</span>
         <button onClick={() => dispatcher({type: ACTIONS.TOOGLE_TODO, payload: {id: todo.id} })}> DONE</button>
         <button onClick={() => dispatcher({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>DELETE</button>
    </div>

    )
}

export default ToDo;