import { useLocation } from 'react-router-dom';
import UserSidebar from './user sidebar/UserSideBar';

function UserLayout({ children }: any) {
  const location = useLocation();

  const sidebarPaths = ['/faq/topic', '/faq/question'];

  const hiddenSidebarPaths = ['/admin', '/faq?search'];

  const shouldShowSidebar =
    sidebarPaths.some((path) => location.pathname.startsWith(path)) &&
    !hiddenSidebarPaths.some((path) => location.pathname.startsWith(path));

  return (
    <div className="flex flex-col md:flex-row ">
      {shouldShowSidebar && <UserSidebar />}
      <main
        className={
          shouldShowSidebar
            ? 'flex-1 mx-auto  md:max-w-none  lg:pl-[22rem]  '
            : 'w-full'
        }
      >
        {children}
      </main>
    </div>
  );
}

export default UserLayout;
