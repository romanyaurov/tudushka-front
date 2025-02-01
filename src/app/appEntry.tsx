import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './appRouter.tsx';
import './index.css';
import { Provider } from 'react-redux';
import appStore from './appStore.ts';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter()} />
  </Provider>
)