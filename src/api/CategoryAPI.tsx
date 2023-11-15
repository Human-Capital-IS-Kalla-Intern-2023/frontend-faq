// Import Helpers
import { RequestApi } from '../helpers/RequestApi';
import TokenHelper from '../helpers/TokenHelpers';

// GET category
const getCategory = async () => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetCategory = await RequestApi(
      'GET',
      'category',
      {},
      headerToken,
      'Mengambil category'
    );

    return responseGetCategory;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data category:', error);
    throw error;
  }
};

export { getCategory };
