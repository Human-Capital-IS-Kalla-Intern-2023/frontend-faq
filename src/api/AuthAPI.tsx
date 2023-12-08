// Import Library & Package
import Cookies from 'js-cookie';

// Import Helpers
import { RequestApi, RequestApiEss } from '../helpers/RequestApi';
import TokenHelper from '../helpers/TokenHelpers';

// Login  API
const loginUser = async (credentials: any) => {
  try {
    const responseLogin = await RequestApi(
      'POST',
      'login',
      credentials,
      {},
      'Mencoba Login'
    );

    const access_token = responseLogin.data.access_token;
    Cookies.set('access_token', access_token, { expires: 7 });

    return true;
  } catch (error) {
    console.error('Terjadi kesalahan saat mencoba login ', error);
    throw error;
  }
};

const loginEss = async () => {
  try {
    const responseLogin = await RequestApiEss(
      'GET',
      'auth/ess',
      {},
      {},
      'Mencoba Login ess'
    );

    console.log(responseLogin);

    return true;
  } catch (error) {
    console.error('Terjadi kesalahan saat mencoba login ess ', error);
    throw error;
  }
};

// Logout API
const logoutUser = async () => {
  try {
    const token = TokenHelper();

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

    Cookies.remove('access_token');

    return responseData;
  } catch (error) {
    console.error('Terjadi kesalahan saat mencoba logout ', error);
    throw error;
  }
};

export { loginUser, logoutUser, loginEss };
