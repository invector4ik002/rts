import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {

   const history = useHistory();

   return (
      <>
         <h1>Страница информации</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae laborum ipsa itaque beatae nobis odio amet nulla architecto dicta eum, minus quod totam consequatur corrupti. Rerum amet aut perferendis.</p>
         <button 
            className='bth'
            onClick={() => history.push('/')}
         >Щобратно к списку дел
         </button>
      </>
   )
}