import React from 'react';

import { ITodo } from '../interfaces';
/**
 * Описание того что есть пропсы :)
 * todos: any[], это будет массив any-любой поправим
 * todos: ITodo[], это будет массив по типу "модели (применяю термин из express)" ITodo
 */
type TodoListProps = {
   // todos: any[]
   todos: ITodo[]
   onToggle: (id: number) => void
   onRemove: () => void
};
/**
 * @param {todos} - массив-пропс :)
 */
export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
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
                     <input type='checkbox' checked={todo.complited}/>
                     <span>{todo.title}</span>
                     <i className='material-icons red-text'>delete</i>
                  </label>
               </li>
            );
         })}
      </ul>
   );
};