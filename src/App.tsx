// Import Library & Package
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Layout
import AdminLayout from './layout/AdminLayout';
import UserLayout from './layout/UserLayout';

// Import Component
import AddModal from './components/modals/AddModal';
import EditModal from './components/modals/EditModal';
import DetailModal from './components/modals/DetailModal';
import DeleteModal from './components/modals/DeleteModal';

// Import Page
import FaqAdmin from './pages/admin/FAQ/FaqAdmin';
import AddFaqAdmin from './pages/admin/FAQ/AddFaqAdmin';
import DetailFaqAdmin from './pages/admin/FAQ/DetailFaqAdmin';
import EditFaqAdmin from './pages/admin/FAQ/EditFaqAdmin';

import TopicAdmin from './pages/admin/TopicAdmin';

import HomeUser from './pages/user/HomeUser';
import Question from './pages/user/Question';

import NotFound from './pages/auth/NotFound';
import PermissionDenied from './pages/auth/PermissionDenied';
import Unauthorized from './pages/auth/Unauthorized';

// Import CSS
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Admin Routes Start */}
        <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <Routes>
                <Route path="faq" element={<FaqAdmin />}>
                  <Route
                    path="delete/:modalDeleteId"
                    element={<DeleteModal />}
                  />
                </Route>

                <Route path="topic" element={<TopicAdmin />}>
                  <Route path="add" element={<AddModal />} />
                  <Route path="edit/:modalEditId" element={<EditModal />} />
                  <Route
                    path="detail/:modalDetailId"
                    element={<DetailModal />}
                  />
                  <Route
                    path="delete/:modalDeleteId"
                    element={<DeleteModal />}
                  />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AdminLayout>
          }
        />

        <Route path="admin/faq/add" element={<AddFaqAdmin />} />
        <Route path="admin/faq/detail" element={<DetailFaqAdmin />} />
        <Route path="admin/faq/edit" element={<EditFaqAdmin />} />
        {/* Admin Routes End */}

        {/* User Routes Start */}
        <Route
          path="/*"
          element={
            <UserLayout>
              <Routes>
                <Route path="/faq/home" element={<HomeUser />} />
                <Route path="/faq/question" element={<Question />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </UserLayout>
          }
        />
        {/* User Routes End */}

        {/* Error Route Start */}
        <Route path="*" element={<NotFound />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/permissiondenied" element={<PermissionDenied />} />
        {/* Error Route End */}
      </Routes>
    </Router>
  );
};
export default App;
