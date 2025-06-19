import { createBrowserRouter } from 'react-router';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Overview from './components/Overview';

import StudentApp from './StudentApp';

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
  {
    path: 'pStudyWare',
    authentication: true, // meta setup for usage later
    element: <StudentApp />,
  },
]);

export default routes;
