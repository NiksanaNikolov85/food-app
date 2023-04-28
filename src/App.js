import {React, useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true);
  }

  const hideCart = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCart} />}
      <Header onShowCart={showCart}/>
     <main>
      <Meals />
     </main>
    </CartProvider>
  );
}

export default App;


// import React, {useState, useReducer} from 'react';
// import ToDo from './Todo';

// export const ACTIONS = {
//   ADD_TODO: 'add-todo',
//   TOOGLE_TODO: 'toggle-todo',
//   DELETE_TODO: 'delete-todo'

// }

// function reducer (state1, action) {
//   switch (action.type) {
//     case ACTIONS.ADD_TODO:
//       return [...state1 , newTodo(action.payload.name)]
//     case ACTIONS.TOOGLE_TODO: 
//       return state1.map(todo => {
//         if(todo.id === action.payload.id) {
//           return {...todo, complete: !todo.complete}
//         }
//         return todo
//       })
//     case ACTIONS.DELETE_TODO:
//       return state1.filter(todo => todo.id !== action.payload.id)  
//     default: return state1;
//   }
  
// }

// function newTodo (name) {
//   return {id: Date.now(), name:name, complete: false}
// }

// export default function App () {
//   const [name, setName] = useState('');

//   const [todos, dispatch] = useReducer(reducer,[])

//   const handleSubmit = (e) => {
//     e.preventDefault();
//    dispatch( {type: ACTIONS.ADD_TODO, payload: {name: name}} )
//     setName('');
//   }

//   console.log(todos);

//   return (
//     <div>
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={name} onChange={e => setName(e.target.value)}/>
//     </form>
//     {todos.map((todo) => {
//       return <ToDo key={todo.id} todo={todo} dispatcher={dispatch}/>
//     })}
//     </div>
//   )
// }