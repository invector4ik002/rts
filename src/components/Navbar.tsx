import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => {
   return (
      <nav>
         <div className="nav-wrapper deep-purple darken-4 nav-wrapper--padding">
           <a  className="brand-logo" href="/">React + TypeScript</a>
           <ul className="right hide-on-med-and-down">
               <li><NavLink to="/">Список дел</NavLink></li>
               <li><NavLink to="/about">Информация</NavLink></li>
           </ul>
         </div>
      </nav>
   );
};
console.log( 'Navbar: components/Navbar');