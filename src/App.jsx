import './App.css';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
