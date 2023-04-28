import React, {useState, useReducer} from 'react';
import Todo1 from './Todo1';

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOOGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...state, newTodo(action.name)]
        case ACTIONS.TOOGLE_TODO:
          return state.map(todo => {
               console.log(todo.id, action.id, '5555555')
               if (todo.id === action.id) {
                   return {...todo, complete: !todo.complete}
               }
               return todo
           })
        case ACTIONS.DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id )   
          default:
              return state  
    }

}

const newTodo = (name) => {
    return { id: Date.now(), name: name, complete: false }
}

const App1 = () => {
    const [name, setName] = useState('');

    const [todos, dispatch] = useReducer(reducer, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_TODO, name: name})
        setName('');
    }

    return (
        <div style={{'textAlign' : 'center'}}>
            <form onSubmit={handleSubmit}>
                <h1 style={{color: '#fff'}}>Добавете задачи за деня</h1>
                <input value={name} style={{width: '300px', height: '30px'}} onChange={e => setName(e.target.value)}/>
            </form>
            <div>{todos.map(todo => {
                return <Todo1 key={todo.id} todo={todo} dispatcher={dispatch}/>
            })}</div>
        </div>
    )
}

export default App1;