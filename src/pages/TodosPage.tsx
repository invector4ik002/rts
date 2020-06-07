import React, { useState, useEffect } from 'react';


import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';

declare var confirm: (question: string) => boolean;// TS должен понимать что это глобальный обьект 

export const TodosPage: React.FC = () => {

   const [todos, setTodos] = useState<ITodo[]>([]);// данный хук работает с интерфейсом ITodo

   useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
      setTodos(saved)
   },[]);

   useEffect (() => {
      localStorage.setItem('todos', JSON.stringify(todos));
   },[todos]);

/**
 * 
 * @param title 
 */
   const addHandler = (title: string) => {

      const newTodo: ITodo = {// объект по типу интерфейса ITodo
         title: title,
         id: Date.now(),
         completed: false
      };
      // console.log('App: (f)addHandler =>', title);
      // стейт и пропсы работают в React ассинхронно,нет гарантии того что мы будем работать с придедущим стейтом!!!
      // setTodos([newTodo, ...todos]);// не очень корректно 
      setTodos(prev => [newTodo, ...prev]); // такая запись гарантирует работу с предыдущим сотоянием , кыыылбэк замыкания :)
   };
/**
 * 
 * @param id 
 */
   const tooggleHandler = (id: number) => {
      setTodos(prev => 
         prev.map(todo => {
         if(todo.id === id) {
            todo.completed = !todo.completed
         }
         console.log(todo)
         return todo
      }))
   };
/**
 * 
 * @param id 
 */
   const removeHanler = (id: number) => {
      const shoudRemove = confirm('вы уверениы что хотите удалить элемент?');
      if(shoudRemove) {
         setTodos(prev => prev.filter(todo => todo.id !== id))
      }
      
   };

   return(
     <>
        {/* при сипользовании TS при передачи свойств в дочерний компонент возникает ошибка, для ее устранения нужно в самом компоненте указать какие 
        именно св-вва принемает компонент с ками данными! */}
        <TodoForm addHandler={addHandler}/>
        <TodoList 
           todos={todos}
           tooggleHandler={tooggleHandler}
           onRemove={removeHanler}
        />
     </>
   ) 
}