import { useLocation } from 'react-router-dom';
import Sidebar from './admin sidebar/AdminSideBar';
import Cookies from 'js-cookie';

function UserLayout({ children }: any) {
  const location = useLocation();

  const sidebarPaths = ['/category', '/faq'];

  const hiddenSidebarPaths = ['/'];

  const isAuthenticated = !!Cookies.get('access_token');

  const shouldShowSidebar =
    isAuthenticated &&
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
