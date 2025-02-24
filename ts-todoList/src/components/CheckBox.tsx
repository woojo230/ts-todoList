import { ChangeEvent } from 'react';

interface ICheckBox {
  id: number;
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function CheckBox({ id, label, checked, onChange }: ICheckBox) {
  return (
    <>
      <input
        id={String(id)}
        checked={checked}
        type="checkbox"
        onChange={onChange}
      />
      <label htmlFor={String(id)}>{label}</label>
    </>
  );
}

export default CheckBox;
