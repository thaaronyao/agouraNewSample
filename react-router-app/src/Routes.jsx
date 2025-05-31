import { createBrowserRouter } from 'react-router';
import App from './App';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <div>Home</div>,
      },
    ],
  },
]);

export default routes;
