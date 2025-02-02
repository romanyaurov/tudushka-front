import { Button } from '@tudushka/shared/ui';
import style from './TodoListPage.module.css';
import { TodoList } from '@tudushka/features/todo-list';

export const TodoListPage = () => {
  return (
    <div className={style.todoListPage}>
      <h1 className={style.title}>My TODO List</h1>
      <div className={style.content}>
        <TodoList />
        <Button content="Clear Completed Tasks" fullWidth />
      </div>
    </div>
  );
};
