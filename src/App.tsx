import React from 'react';
import { Navbar } from './components/Navbar';

/**
 * React.FunctionComponent - указывает на то что компонент является функциональным компонентом. Сокращение FC
 */
const App: React.FC = () => {
   return (
      <>
         <Navbar />
         <div className='container'>
            <h1>className='container'</h1>
         </div>
      </>
   );
}
console.log('App: Navbar')
export default App;
