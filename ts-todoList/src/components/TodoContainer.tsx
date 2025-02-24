import { useState } from 'react';
import { TTodo } from '../types/todo';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import CheckBox from './CheckBox';

function TodoContainer() {
  const [todos, setTodos] = useState<TTodo[]>([
    {
      id: 1,
      text: '첫번째 할 일',
      checked: false,
    },
  ]);

  const onAddTodo = (text: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: text,
        checked: false,
      },
    ]);
  };

  const onToggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div>
      <TodoInput onAddTodo={onAddTodo} />
      <TodoList todos={todos} onToggleTodo={onToggleTodo} />
    </div>
  );
}

export default TodoContainer;
