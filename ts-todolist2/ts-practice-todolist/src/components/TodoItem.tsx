import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
const TodoItem = ({ todo, toggleTodo, deleteTodo }: TodoItemProps) => {
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            // 이벤트 핸들러에는 항상 콜백 함수 형태로 전달해야 함에 주의의
            toggleTodo(todo.id);
          }}
        />
        <span
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </span>
        <button
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          삭제
        </button>
      </li>
    </>
  );
};

export default TodoItem;
