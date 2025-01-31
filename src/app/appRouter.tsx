import { createBrowserRouter } from 'react-router-dom';
import { baseLayout } from './layouts/baseLayout';
import { TodoListPage } from '@tudushka/pages/todo-list';
import { AddTodoPage } from '@tudushka/pages/add-todo';
import { ProfilePage } from '@tudushka/pages/profile';

export function appRouter() {
  return createBrowserRouter([
    {
      element: baseLayout,
      errorElement: <div>Error happend</div>,
      children: [
        {
          path: '/',
          element: <TodoListPage />,
        },
        {
          path: '/add',
          element: <AddTodoPage />,
        },
        {
          path: '/profile',
          element: <ProfilePage />,
        },
      ],
    },
  ]);
}
