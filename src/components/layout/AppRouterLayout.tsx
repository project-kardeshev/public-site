import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';
import Notifications from './Notifications';
import ProfileDrawer from './ProfileDrawer';
import Sidebar from './Sidebar';

function AppRouterLayout() {
  return (
    <>
      <Navbar />
      <div className="flex size-full flex-row">
        <Sidebar />
        <Outlet />
      </div>
      <ProfileDrawer />
      <Footer />
      <Notifications />
    </>
  );
}

export default AppRouterLayout;
