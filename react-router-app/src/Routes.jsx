import { createBrowserRouter } from 'react-router';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Overview from './components/Overview';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
        children: [
          {
            path: 'overview',
            element: <Overview />,
          },
        ],
      },
      // {
      //   path: 'about/overview',
      //   element: <Overview />,
      // },
      {
        path: 'mathcircle',
        element: <About />,
      },
    ],
  },
]);

export default routes;
