import { useLocation } from 'react-router-dom';
import Sidebar from './user sidebar/UserSideBar';

function UserLayout({ children }: any) {
  const location = useLocation();

  const sidebarPaths = [
    '/topic',
    // '/faq',
    '/faq/home',
    '/faq/topic',
    '/dashboard',
    '/faq/question',
    '/leavemanagement/faq',
  ];

  const hiddenSidebarPaths = ['/admin'];

  const shouldShowSidebar =
    sidebarPaths.some((path) => location.pathname.startsWith(path)) &&
    !hiddenSidebarPaths.some((path) => location.pathname.startsWith(path));

  return (
    <div className="flex flex-col md:flex-row ">
      {shouldShowSidebar && <Sidebar />}
      <main
        className={
          shouldShowSidebar ? 'flex-1 mx-auto max-w-sm md:max-w-none' : 'w-full'
        }
      >
        {children}
      </main>
    </div>
  );
}

export default UserLayout;
