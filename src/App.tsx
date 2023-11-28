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
import EditFaqAdmin from './pages/admin/FAQ/EditFaqAdmin';
import DetailFaqAdmin from './pages/admin/FAQ/DetailFaqAdmin';

import TopicAdmin from './pages/admin/Topic/TopicAdmin';

import HomeUser from './pages/user/HomeUser';
import Question from './pages/user/Question';
import DetailFaqUser from './pages/user/DetailFaqUser';

import NotFound from './pages/auth/NotFound';
import PermissionDenied from './pages/auth/PermissionDenied';
import Unauthorized from './pages/auth/Unauthorized';

// Import CSS
import './App.css';
import PrivateRoute from './middleware/PrivateRoutes';

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
                    path="delete/:modalDeleteSlug"
                    element={<DeleteModal />}
                  />
                </Route>

                <Route path="topic" element={<TopicAdmin />}>
                  <Route path="add" element={<AddModal />} />
                  <Route path="edit/:modalEditSlug" element={<EditModal />} />
                  <Route
                    path="detail/:modalDetailSlug"
                    element={<DetailModal />}
                  />
                  <Route
                    path="delete/:modalDeleteSlug"
                    element={<DeleteModal />}
                  />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AdminLayout>
          }
        />

        <Route path="admin/faq/add" element={<AddFaqAdmin />} />
        <Route path="admin/faq/edit/:QuestionSlug" element={<EditFaqAdmin />} />
        <Route
          path="admin/faq/detail/:QuestionSlug"
          element={<DetailFaqAdmin />}
        />
        {/* Admin Routes End */}
        {/* User Routes Start */}
        <Route
          path="/*"
          element={
            <UserLayout>
              <Routes>
                <Route path="/faq/question" element={<Question />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </UserLayout>
          }
        />
        <Route path="/" element={<HomeUser />} />

        <Route
          path="/pertanyaanumum/lupapassword"
          element={
            <PrivateRoute
              path="/pertanyaanumum/lupapassword"
              element={<DetailFaqUser />}
            />
          }
        >
          {/* <Route path="detail/:modalDetailId" element={<DetailModal />} /> */}
        </Route>

        {/* User Routes End */}
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
