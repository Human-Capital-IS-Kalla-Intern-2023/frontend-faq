import { useLocation } from 'react-router-dom';
import AdminSidebar from './admin sidebar/AdminSideBar';

function AdminLayout({ children }: any) {
  const location = useLocation();

  const sidebarPaths = ['/admin/faq', '/admin/topic'];

  const hiddenSidebarPaths = [
    '/admin/faq/add',
    '/admin/faq/edit',
    '/admin/faq/detail',
  ];

  const shouldShowSidebar =
    sidebarPaths.some((path) => location.pathname.startsWith(path)) &&
    !hiddenSidebarPaths.some((path) => location.pathname.startsWith(path));

  return (
    <div className="flex flex-col md:flex-row ">
      {shouldShowSidebar && <AdminSidebar />}
      <main
        className={
          shouldShowSidebar
            ? 'flex-1 mx-auto max-w-sm md:max-w-none lg:pl-[18rem]  '
            : 'w-full'
        }
      >
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
