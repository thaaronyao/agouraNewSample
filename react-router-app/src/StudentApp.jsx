import { Outlet } from 'react-router';
import StudentTopbar from './components/studentApp/Topbar';

const StudentApp = () => {
  return (
    <>
      <StudentTopbar />
      <Outlet />
    </>
  );
};

export default StudentApp;
