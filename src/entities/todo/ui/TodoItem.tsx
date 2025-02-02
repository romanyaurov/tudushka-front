import { LuCaseSensitive, LuTrash2 } from 'react-icons/lu';
import { TodoType } from '@tudushka/shared/models';
import styles from './TodoItem.module.css';
import { Checkbox } from '@tudushka/shared/ui';

interface TodoItemProps {
  todo: TodoType;
  onToggle: () => void;
  onRemove: () => void;
}

export const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
  return (
    <div className={styles.todoItemWrapper}>
      <div className={`${styles.todoItem} ${
            todo.addingAnimation ? styles.addingAnimation : ''
          }`}>
        <div
          className={styles.todoTogglerWrapper}
        >
          {todo.addingAnimation && (
            <div className={styles.togglerPlug}>
              <LuCaseSensitive />
            </div>
          )}
          <div className={styles.togglerMain}>
            <Checkbox checked={todo.isCompleted} onChange={onToggle} />
          </div>
        </div>
        <span className={styles.todoText}>
          {todo.text}
          <span
            className={`${styles.todoTextCrossLine} ${
              todo.isCompleted ? styles.visible : ''
            }`}
          ></span>
        </span>
        <div className={styles.todoActionWrapper}>
          <button className={styles.todoAction} onClick={onRemove}>
            <LuTrash2 />
          </button>
        </div>
      </div>
    </div>
  );
};
