import { useState } from 'react';
import { Todo } from '../types/todo';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoContainer() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: '첫번째 할 일',
      checked: false,
    },
  ]);

  return (
    <div>
      <TodoInput />
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoContainer;
