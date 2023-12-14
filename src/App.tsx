import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useCookies } from 'react-cookie';

// Layouts
import AdminLayout from './layout/AdminLayout';
import UserLayout from './layout/UserLayout';

// Components
import AddModal from './components/modals/AddModal';
import EditModal from './components/modals/EditModal';
// import DetailModal from './components/modals/DetailModal';
import DeleteModal from './components/modals/DeleteModal';

// Admin Pages
import FaqAdmin from './pages/admin/FAQ/FaqAdmin';
import AddFaqAdmin from './pages/admin/FAQ/AddFaqAdmin';
import EditFaqAdmin from './pages/admin/FAQ/EditFaqAdmin';
import DetailFaqAdmin from './pages/admin/FAQ/DetailFaqAdmin';
import TopicAdmin from './pages/admin/Topic/TopicAdmin';
import DetailTopicAdmin from './pages/admin/Topic/DetailTopicAdmin';
import DashboardAdmin from './pages/admin/DashboardAdmin';
// User Pages
import HomeUser from './pages/user/HomeUser';
import Question from './pages/user/Question';
import DetailFaqUser from './pages/user/DetailFaqUser';
import SearchResult from './pages/user/SearchResult';
import ESSLogin from './pages/auth/ESSLogin';

// Auth Pages
import NotFound from './pages/auth/NotFound';
import NotFoundAdmin from './pages/auth/NotFoundAdmin';
import PermissionDenied from './pages/auth/PermissionDenied';
import Unauthorized from './pages/auth/Unauthorized';
import Login from './pages/auth/LoginAdmin';
import Callback from './pages/auth/Callback';

import './App.css';

const AdminRoutes: React.FC = () => {
  return (
    <AdminLayout>
      <Routes>
        {/* FAQ Admin Routes */}
        <Route path="dashboard" element={<DashboardAdmin />} />
        <Route path="faq" element={<FaqAdmin />}>
          <Route path="delete/:modalDeleteSlug" element={<DeleteModal />} />
        </Route>
        <Route path="faq/add" element={<AddFaqAdmin />} />
        <Route path="faq/edit/:QuestionSlug" element={<EditFaqAdmin />} />
        <Route path="faq/detail/:QuestionSlug" element={<DetailFaqAdmin />} />

        {/* Topic Admin Routes */}
        <Route path="topic" element={<TopicAdmin />}>
          <Route path="add" element={<AddModal />} />
          <Route path="edit/:modalEditSlug" element={<EditModal />} />
          {/* <Route path="detail/:modalDetailSlug" element={<DetailModal />} /> */}
          <Route path="delete/:modalDeleteSlug" element={<DeleteModal />} />
        </Route>
        <Route path="topic/detail/:TopicSlug" element={<DetailTopicAdmin />} />
        <Route path="*" element={<NotFoundAdmin />} />
      </Routes>
    </AdminLayout>
  );
};

const UserRoutes: React.FC = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="home" element={<HomeUser />} />
        <Route path="/faq/question/:TopicSlug" element={<Question />} />
        <Route path="/faq/search" element={<SearchResult />} />

        <Route
          path="/faq/question/:TopicSlug/:QuestionDetailSlug"
          element={<DetailFaqUser />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserLayout>
  );
};

const App: React.FC = () => {
  const [adminCookies] = useCookies(['admin_access_token']);
  const [userCookies] = useCookies(['access_token']);

  const isAdminAuthenticated = !!adminCookies.admin_access_token;
  const isUserAuthenticated = !!userCookies.access_token;
  return (
    <Router>
      <Routes>
        <Route
          path="/admin/*"
          element={
            isAdminAuthenticated ? (
              <AdminRoutes />
            ) : (
              <Navigate to="/auth/login" />
            )
          }
        />

        <Route
          path="/*"
          element={
            isUserAuthenticated ? (
              <UserRoutes />
            ) : (
              <Navigate to="/unauthorized" />
            )
          }
        />

        <Route path="/callback" element={<Callback />} />
        <Route path="/" element={<ESSLogin />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/permissiondenied" element={<PermissionDenied />} />

        {/* <Route path="/*" element={<UserRoutes />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
