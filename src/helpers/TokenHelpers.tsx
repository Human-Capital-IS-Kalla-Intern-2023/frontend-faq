// Import Library & Package
import Cookies from 'js-cookie';

const TokenHelperUser = () => {
  const token = Cookies.get('access_token');
  if (!token) {
    throw new Error('Access token not available');
  }
  return token;
};

const TokenHelperAdmin = () => {
  const token = Cookies.get('admin_access_token');
  if (!token) {
    throw new Error('Admin Access token not available');
  }
  return token;
};

export { TokenHelperAdmin, TokenHelperUser };
