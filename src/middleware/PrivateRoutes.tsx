import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const isAuthenticated = () => {
  const token = Cookies.get('access_token');
  return !!token;
};
interface PrivateRouteProps {
  element: JSX.Element;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  if (isAuthenticated()) {
    return element;
  } else {
    return <Navigate to="/unauthorized" />;
  }
};

export default PrivateRoute;
