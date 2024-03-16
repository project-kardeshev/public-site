import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';
import Notifications from './Notifications';
import Sidebar from './Sidebar';

function AppRouterLayout() {
  return (
    <>
      <Navbar />
      <div className="flex h-full flex-row">
        <Sidebar />
        <Outlet />
      </div>

      <Footer />
      <Notifications />
    </>
  );
}

export default AppRouterLayout;
