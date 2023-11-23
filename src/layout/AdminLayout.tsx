// import { useLocation } from 'react-router-dom';
import AdminSidebar from './admin sidebar/AdminSideBar';

function AdminLayout({ children }: any) {
  // const location = useLocation();

  // const sidebarPaths = ['/admin/faq', '/admin/topic'];

  // const hiddenSidebarPaths = ['/faq', '/topic'];

  // const shouldShowSidebar =
  //   sidebarPaths.some((path) => location.pathname.startsWith(path)) &&
  //   !hiddenSidebarPaths.some((path) => location.pathname.startsWith(path));

  return (
    <div className="flex flex-col md:flex-row ">
      <AdminSidebar />
      <main className={'flex-1 mx-auto max-w-sm md:max-w-none'}>
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
