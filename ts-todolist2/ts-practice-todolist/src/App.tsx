import { useEffect, useState } from 'react';
import { Todo } from './types';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  const addTodo = (text: string) => {
    const newTodo = {
      id: nextId,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNextId((prev) => prev + 1);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <div className="App">
        <h1>타입스트립트 ToDoList</h1>
        <TodoForm addTodo={addTodo}></TodoForm>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        ></TodoList>
      </div>
    </>
  );
}

export default App;
