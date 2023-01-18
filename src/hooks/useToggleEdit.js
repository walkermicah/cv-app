import { useState } from 'react';

export default function useToggleEdit(initialVal = false) {
  const [edit, setEdit] = useState(initialVal);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return [edit, toggleEdit];
}
