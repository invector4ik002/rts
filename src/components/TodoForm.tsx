import React from 'react';

export const TodoForm: React.FC = () => {
   return (
      <div className='input-field input-field--margin'>
         <input type='text' id='title' placeholder='Введите название дела'/>
         <label className='active' htmlFor='title'>
            Введите название дела
         </label>
      </div>
   );
};
console.log('TodoForm: components/TodoForm');