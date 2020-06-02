import React, { useState } from 'react';

import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

import { ITodo } from './interfaces';

/**
 * React.FunctionComponent - указывает на то что компонент является функциональным компонентом. Сокращение FC
 */
const App: React.FC = () => {
   
   const [todos, setTodos] = useState<ITodo[]>([]);// данный хук работает с интерфейсом ITodo

   const addHandler = (title: string) => {

      const newTodo: ITodo = {// объект по типу интерфейса ITodo
         title: title,
         id: Date.now(),
         complited:false
      };
      // console.log('App: (f)addHandler =>', title);
      // стейт и пропсы работают в React ассинхронно,нет гарантии того что мы будем работать с придедущим стейтом!!!
      // setTodos([newTodo, ...todos]);// не очень корректно 
      setTodos((prev) => [newTodo, ...prev]); // такая запись гарантирует работу с предыдущим сотоянием , кыыылбэк замыкания :)
   };

   return (
      <>
         <Navbar />
         <div className='container'>
            {/* при сипользовании TS при передачи свойств в дочерний компонент возникает ошибка, для ее устранения нужно в самом компоненте указать какие 
            именно св-вва принемает компонент с ками данными! */}
            <TodoForm addHandler={addHandler}/>
            <TodoList todos={todos}/>
         </div>
      </>
   );
};
console.log('App: components/Navbar,TodoForm');
export default App;
