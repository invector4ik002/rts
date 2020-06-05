import React from 'react';

import { ITodo } from '../interfaces';
/**
 * Описание того что есть пропсы :)
 * todos: any[], это будет массив any-любой поправим
 * todos: ITodo[], это будет массив по типу "модели (применяю термин из express)" ITodo
 * onToggle?: (id: number) => void знак " ? " - говорит TS что эти свойства не обязательно отслеживать что мы можем его передовать можем нет
 */
type TodoListProps = {
   // todos: any[]
   todos: ITodo[]
   tooggleHandler: (id: number) => void
   removeHanler: (id: number) => void
};
/**
 * @param {todos} - массив-пропс :)
 */
export const TodoList: React.FC<TodoListProps> = ({ todos, tooggleHandler, removeHanler }) => {
   return (
      <ul>
         {todos.map( (todo) => {

            const classes = ['todo'];
            if(todo.complited) {
               classes.push('complited')
            }

            return (
               <li className={classes.join(' ')} key={todo.id}>
                  <label>   
                     <input 
                        type='checkbox' 
                        checked={todo.complited} 
                        onChange={tooggleHandler.bind(null, todo.id)}
                     />
                     <span>{todo.title}</span>
                     <i 
                        className='material-icons red-text' 
                        onClick={() => removeHanler(todo.id)}
                     >delete</i>
                  </label>
               </li>
            );
         })}
      </ul>
   );
};