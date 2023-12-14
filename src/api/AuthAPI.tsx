// Import Library & Package
import Cookies from 'js-cookie';

// Import Helpers
import { RequestApi } from '../helpers/RequestApi';

// Login  API
const loginAdmin = async (credentials: any) => {
  try {
    const responseLogin = await RequestApi(
      'POST',
      'login',
      credentials,
      {},
      'Mencoba Login'
    );

    const admin_access_token = responseLogin.data.access_token;
    Cookies.set('admin_access_token', admin_access_token, { expires: 7 });

    return true;
  } catch (error) {
    console.error('Terjadi kesalahan saat mencoba login ', error);
    throw error;
  }
};

// Logout API
const logoutUser = async (token_helper: any) => {
  try {
    const token = token_helper;

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseData = await RequestApi(
      'POST',
      'logout',
      {},
      headerToken,
      'Mencoba Keluar'
    );

    return responseData;
  } catch (error) {
    console.error('Terjadi kesalahan saat mencoba logout ', error);
    return false;
  }
};

export { loginAdmin, logoutUser };
