import React, { useRef } from 'react';
/**
 * Локальный интерфейс описывающий все входящие свойства в компонент 
 * служит для более элегантного вида кода
 * заменяем в описаниии компонента входящие св-ва по правилам TS(<{ addHandler(title: string): void }>) на запись  
 * <TodoFormProps>
 */
interface TodoFormProps {
   addHandler(title: string): void,
}
/**
 * Функциональный компонент 
 * @param props свойства функция добавления элемунт.todo в массив локального состояния 
 * TS писание  TodoForm: React.FC<{ addHandler(title: string): void }
 * TodoForm: React.FC - является функциональным компонентом
 * <{ addHandler(title: string): void }> принемает в себя объект
 * addHandler(title: string): void в котором функция
 * (title: string) которая принемает в себя title который является строкой который является void
 * 
 */
export const TodoForm: React.FC<TodoFormProps> = ({ addHandler }) => {

//---------------------------------------способ №1 работа с локальным стейтом(useState) c input ----------------------------------------------
//    const [title, setTitle] = useState<string>('');
// /**
//  * Получаем данные с input
//  * @param event событие отмечается TS!!! event: React.ChangeEvent<HTMLInputElement>
//  * указатель на то с чем работает данная функая <HTMLInputElement> , афигеть :)
//  */
//    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setTitle(event.target.value);
//    };
//---------------------------------------------------------------------------------------------------------------------------------------------

//---------------------------------------способ №2 работа с локальным стейтом(useRef) c input -------------------------------------------------
   const ref = useRef<HTMLInputElement>(null);// спец.хук uesRef событие отмечается TS!!! <HTMLInputElement>
/**
 * Событие нажатия на клавишу 'Enter' 
 * @param event событие отмечается TS!!! event: React.KeyboardEvent
 */
   const keyPressHandler = (event: React.KeyboardEvent) => {
      if(event.key === 'Enter') {
      //ref.current!.value TS реагирует ошибкой из за того что изночальное состояние null но установка символа '!' говорит TS все норм мы в курсе :)
      console.log('TodoForm: components/TodoForm (f)keyPressHandler =>', ref.current!.value);
      addHandler(ref.current!.value);
      ref.current!.value = ''; // чистим поле input
//----------------------------------------способ №1 работа с локальным стейтом(useState) c input-----------------------------------------------
         // console.log('TodoForm: components/TodoForm (f)keyPressHandler =>', title);
         // setTitle('');//чистим поле input
//---------------------------------------------------------------------------------------------------------------------------------------------
      }
   };

   return (
      <div className='input-field input-field--margin'>
         <input
//----------------------------------------способ №1 работа с локальным стейтом(useState) c input-----------------------------------------------
            // onChange={changeHandler}
//---------------------------------------------------------------------------------------------------------------------------------------------
            onKeyPress={keyPressHandler}
            ref={ref}// специальное значение-связка с хуком useRef
            // value={title} 
            type='text' 
            id='title' 
            placeholder='Введите название дела'/>
         <label className='active' htmlFor='title'>
            Введите название дела
         </label>
      </div>
   );
};
// console.log('TodoForm: components/TodoForm');