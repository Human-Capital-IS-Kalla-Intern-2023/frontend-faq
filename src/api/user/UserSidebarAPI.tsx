// Import Helpers
import { RequestApi } from '../../helpers/RequestApi';

// GET User Sidebar
export const getUserSidebar = async () => {
  try {
    const responseGetUserSidebar = await RequestApi(
      'GET',
      'navbar',
      {},
      {},
      'Mengambil sidebar user'
    );

    return responseGetUserSidebar;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data sidebar:', error);
    throw error;
  }
};
