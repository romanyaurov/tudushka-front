import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter.tsx';
import './index.css';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <RouterProvider router={appRouter()} />
)