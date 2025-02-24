import { ChangeEvent, ChangeEventHandler, useState } from 'react';

interface ItodoInput {
  onAddTodo: (text: string) => void; // 반환하는 값은 없으므로 void로 설정
}

function TodoInput({ onAddTodo }: ItodoInput) {
  const [input, setInput] = useState<string>('');

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    onAddTodo(input);
    setInput('');
  };

  return (
    <>
      <input value={input} onChange={handleChangeInput} />
      <button onClick={addTodo}>일정 추가</button>
    </>
  );
}

export default TodoInput;
