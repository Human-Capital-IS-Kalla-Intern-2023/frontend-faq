// Import Library & Package
import Cookies from 'js-cookie';

const TokenHelperUser = () => {
  const token = Cookies.get('access_token');
  if (!token) {
    console.error('Access token not available');
    // throw new Error('Access token not available');
    return false;
  }
  return token;
};

const TokenHelperAdmin = () => {
  const token = Cookies.get('admin_access_token');
  if (!token) {
    console.error('Admin Access token not available');
    return false;
    // throw new Error('Admin Access token not available');
  }
  return token;
};

export { TokenHelperAdmin, TokenHelperUser };
