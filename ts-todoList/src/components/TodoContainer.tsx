import { useState } from 'react';

function TodoContainer() {
  const [todos, setTodos] = useState([]);

  return <div>{todos.map}</div>;
}

export default TodoContainer;
