import React, { useState } from 'react';

import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';

/**
 * React.FunctionComponent - указывает на то что компонент является функциональным компонентом. Сокращение FC
 */
const App: React.FC = () => {
   
   const [todos, setTodos] = useState([]);

   const addHandler = (title: string) => {
      console.log('App: (f)addHandler =>', title);
   };

   return (
      <>
         <Navbar />
         <div className='container'>
            {/* при сипользовании TS при передачи свойств в дочерний компонент возникает ошибка, для ее устранения нужно в самом компоненте указать какие 
            именно св-вва принемает компонент с ками данными! */}
            <TodoForm addHandler={addHandler}/>
         </div>
      </>
   );
};
console.log('App: components/Navbar,TodoForm');
export default App;
