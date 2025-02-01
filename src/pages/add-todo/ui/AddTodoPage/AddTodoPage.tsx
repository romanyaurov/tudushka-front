import { TodoAddForm } from '@tudushka/features/add-todo-form';
import style from './AddTodoPage.module.css';

export const AddTodoPage = () => {
  return (
    <div className={style.addTodoPage}>
      <h1 className={style.title}>Add New TODO</h1>
      <TodoAddForm />
    </div>
  );
};
