import { useState } from 'react'
/* сначала глобальные импорты */

/* потом локальные импорты */
/* import TodoList from './components/TodoList/TodoList.js' 
такой путь очень длинный */
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import './App.css'

/* рекомендуется создавать приложение сначала без стилей
апотом уже стилизовать и позиционировать размечать
 */
function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }
  /*   создаем функцию которая будет добавлять строку в список 
в данной функции мы берем массив деструктуризируем его для
удобства и доавляем туда наш текст */

  const deleteTodoHandler = (index) => {
    /* функция которая по двойному клику на задачу
    удаляет её */
    setTodos(todos.filter((_, idx) => idx !== index))
    /* первый параметр функции фильтр это 
    элемент массива вторая индекс 
    если значение правдиво фильтр все оставляет
    если нет то то элемент будет удален*/
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {/* 1 действие передаем функцию как свойство в файл
      todoform  */}
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
      {/* 1 действие передаем наш список как переменную в файл TodoList.js */}
      {/* передаем нашу функцию которая удаляет элемент из массива */}
    </div>
  )
}

export default App
/* react-icons ri это раздел на сайте remix icons 
оттуда мы будем брать наши иконки*/

/* пишем npm install react-icons */
