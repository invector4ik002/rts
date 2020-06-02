import React from 'react';
/**
 * Описание того что есть пропсы :)
 * todos: any[], это будет массив
 */
type TodoListProps = {
   todos: any[]
};
/**
 * @param {todos} - массив-пропс :)
 */
export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
   return (
      <ul>
         {todos.map( (todo) => {
            return (
               <li className="todo">
                  <label>   
                     <input type='checkbox'/>
                     <span></span>
                     <i className='material-icons red-text'>delete</i>
                  </label>
               </li>
            );
         })};
      </ul>
   );
};