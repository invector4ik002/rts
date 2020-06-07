import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';
/**
 * React.FunctionComponent - указывает на то что компонент является функциональным компонентом. Сокращение FC
 */
const App: React.FC = () => {
   
   return (
      <BrowserRouter>
         <Navbar />
         <div className='container'>
         <Switch>
             <Route path='/' component={TodosPage} exact/>
             <Route path='/about' component={AboutPage}/>
         </Switch>
         </div>
      </BrowserRouter>
   );
};
console.log('App: components/Navbar,TodoForm');
export default App;
