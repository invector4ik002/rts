import React from 'react';
import {} from 'react-router-dom';

import { Navbar } from './components/Navbar';

/**
 * React.FunctionComponent - указывает на то что компонент является функциональным компонентом. Сокращение FC
 */
const App: React.FC = () => {
   
   return (
      <>
         <Navbar />
         <div className='container'></div>  
      </>
   );
};
console.log('App: components/Navbar,TodoForm');
export default App;
