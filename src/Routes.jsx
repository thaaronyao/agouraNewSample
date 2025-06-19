import { createBrowserRouter } from 'react-router';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Overview from './components/Overview';

import StudentPortal from './StudentPortal';
import Login from './components/Login';
import StudentRegistration from './components/StudentRegistration';

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
      {
        path: 'mathcircle',
        element: <About />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'studentregistration',
        element: <StudentRegistration />,
      },
    ],
  },
  {
    path: 'pStudyWare',
    authentication: true, // meta setup for usage later
    element: <StudentPortal />,
  },
]);

export default routes;
