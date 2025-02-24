import { TTodo } from '../types/todo';
import CheckBox from './CheckBox';

interface ITodoList {
  todos: TTodo[];
  onToggleTodo: (id: number) => void;
}

function TodoList({ todos, onToggleTodo }: ITodoList) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <CheckBox
            id={todo.id}
            label={todo.text}
            checked={todo.checked}
            onChange={() => onToggleTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
