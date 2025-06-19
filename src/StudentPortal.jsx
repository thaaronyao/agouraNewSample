import { Outlet } from 'react-router';
import StudentTopbar from './components/studentPortal/Topbar';

const StudentApp = () => {
  return (
    <>
      <StudentTopbar />
      <Outlet />
    </>
  );
};

export default StudentApp;
