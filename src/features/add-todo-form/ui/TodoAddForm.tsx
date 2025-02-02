import { useState } from 'react';
import { LuCaseSensitive } from "react-icons/lu";
import { Button, Input } from '@tudushka/shared/ui';
import styles from './TodoAddForm.module.css';
import { useDispatch } from 'react-redux';
import { addTodo, toggleAddingAnimation } from '@tudushka/entities/todo';
import { useNavigate } from 'react-router-dom';

export const TodoAddForm = () => {
  const [formValue, setFormValue] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputValueChange = (inputValue: string) => {
    setFormValue(inputValue);
  };

  const handleAddTask = () => {
    const newTaskId = Math.floor(Math.random() * 1001).toString();

    const newTaskObj = {
      id: newTaskId,
      isCompleted: false,
      text: formValue,
      addingAnimation: true,
    }

    dispatch(addTodo(newTaskObj));
    navigate('/');

    const timeout = setTimeout(() => {
      dispatch(toggleAddingAnimation(newTaskId))
    }, 300)

    return () => clearTimeout(timeout);
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
