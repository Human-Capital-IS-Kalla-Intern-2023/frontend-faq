// Import Library & Package
import Cookies from 'js-cookie';

const TokenHelper = () => {
  const token = Cookies.get('access_token');
  if (!token) {
    throw new Error('Access token not available');
  }
  return token;
};

export default TokenHelper;
