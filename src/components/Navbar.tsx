import React from 'react';

export const Navbar: React.FunctionComponent = () => {
   return (
      <nav>
         <div className="nav-wrapper deep-purple darken-4 nav-wrapper--padding">
           <a  className="brand-logo" href="/">React + TypeScript</a>
           <ul className="right hide-on-med-and-down">
               <li><a href="/">Список дел</a></li>
               <li><a href="/">Информация</a></li>
           </ul>
         </div>
      </nav>
   );
};
console.log( 'Navbar: components/Navbar');