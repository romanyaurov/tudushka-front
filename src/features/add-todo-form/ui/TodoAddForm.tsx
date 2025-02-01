import { useState } from 'react';
import { LuCaseSensitive } from "react-icons/lu";
import { Button, Input } from '@tudushka/shared/ui';
import styles from './TodoAddForm.module.css';

export const TodoAddForm = () => {
  const [formValue, setFormValue] = useState<string>('');

  const handleInputValueChange = (inputValue: string) => {
    setFormValue(inputValue);
  };

  const handleAddTask = () => {
    console.log(formValue);
  };

  return (
    <form className={styles.addTodoForm}>
      <Input
        placeholder="Enter Task Text"
        icon={<LuCaseSensitive />}
        onChange={(value) => handleInputValueChange(value)}
      />
      <Button
        content="Add New Task"
        fullWidth
        onClick={handleAddTask}
      />
    </form>
  );
};
