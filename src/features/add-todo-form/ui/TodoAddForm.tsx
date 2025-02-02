import { useState } from "react";
import { LuCaseSensitive } from "react-icons/lu";
import { Button, Input } from '@tudushka/shared/ui';
import styles from './TodoAddForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, selectIsTodoAdding, toggleAddingAnimation, toggleTodoAdding } from '@tudushka/entities/todo';
import { useNavigate } from 'react-router-dom';

export const TodoAddForm = () => {
  const [formValue, setFormValue] = useState<string>('');
  const isAnimationInProgress = useSelector(selectIsTodoAdding);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      dispatch(toggleAddingAnimation(newTaskId));
      dispatch(toggleTodoAdding());
    }, 300)

    return () => clearTimeout(timeout);
  };

  return (
    <form className={styles.addTodoForm}>
      <div className={`${styles.inputWrapper} ${isAnimationInProgress ? styles.rollOut : ''}`}>
        <Input
          placeholder="Enter Task Text"
          icon={<LuCaseSensitive />}
          onChange={(value) => setFormValue(value)}
        />
      </div>
      <Button
        content="Add New Task"
        fullWidth
        onClick={handleAddTask}
      />
    </form>
  );
};
