import { useDispatch, useSelector } from 'react-redux';
import styles from './TodoList.module.css';
import { selectTodos, TodoItem, toggleTodo } from '@tudushka/entities/todo';
import { TodoType } from '@tudushka/shared/models';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {};

  const handleToggleTodo = (todoId: string) => {
    dispatch(toggleTodo(todoId))
  };

  return (
    <ul className={styles.todoList}>
      {todos.length > 0 ? (
        todos.map((todo: TodoType) => (
          <li className={`${styles.todoItem} ${todo.addingAnimation ? styles.rollIn : ''}`} key={todo.id}>
            <TodoItem
              todo={todo}
              onToggle={() => handleToggleTodo(todo.id)}
              onRemove={handleRemoveTodo}
            />
          </li>
        ))
      ) : (
        <span>There is no tasks yet</span>
      )}
    </ul>
  );
};
