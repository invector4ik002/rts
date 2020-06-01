import React from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';

/**
 * React.FunctionComponent - указывает на то что компонент является функциональным компонентом. Сокращение FC
 */
const App: React.FC = () => {
   return (
      <>
         <Navbar />
         <div className='container'>
            <TodoForm/>
         </div>
      </>
   );
};
console.log('App: Navbar');
export default App;
