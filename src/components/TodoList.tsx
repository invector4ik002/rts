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
   onRemove: (id: number) => void
};
/**
 * @param {todos} - массив-пропс :)
 */
export const TodoList: React.FC<TodoListProps> = ({ todos, tooggleHandler, onRemove }) => {

   if(todos.length === 0) {
      return <p className="center">Дела нет</p>
   } 

   const removeHanler = (event: React.MouseEvent, id: number) => {
      event.preventDefault();

      onRemove(id)
   }

   return (
      <ul>
         {todos.map(todo => {

            const classes = ['todo']
            if(todo.completed) {
               classes.push('completed')
            }

            return (
               <li className={classes.join(' ')} key={todo.id}>
                  <label>   
                     <input 
                        type='checkbox' 
                        checked={todo.completed} 
                        onChange={tooggleHandler.bind(null, todo.id)}
                     />
                     <span>{todo.title}</span>
                     <i 
                        className='material-icons red-text' 
                        onClick={(event) => removeHanler(event, todo.id)}
                     >delete</i>
                  </label>
               </li>
            );
         })}
      </ul>
   );
};