// Import Helpers
import { RequestApi } from '../../helpers/RequestApi';
import TokenHelper from '../../helpers/TokenHelpers';

// GET CategoryAdmin
const getCategoryAdmin = async () => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetCategoryAdmin = await RequestApi(
      'GET',
      'category-admin',
      {},
      headerToken,
      'Mengambil category admin'
    );

    return responseGetCategoryAdmin;
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat mengambil data categoryAdmin:',
      error
    );
    throw error;
  }
};

// GET Detail CategoryAdmin
const getDetailCategoryAdmin = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDetailCategoryAdmin = await RequestApi(
      'GET',
      `category-admin/${id}`,
      {},
      headerToken,
      'Mengambil detail category admin'
    );

    return reponseGetDetailCategoryAdmin;
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat mengambil data categoryAdmin:',
      error
    );
    throw error;
  }
};

// POST CategoryAdmin
const addCategoryAdmin = async (formData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseAddCategoryAdmin = await RequestApi(
      'POST',
      'category-admin',
      formData,
      headerToken,
      'Membuat category admin'
    );

    return reponseAddCategoryAdmin;
  } catch (error) {
    console.error('Kesalahan saat membuat categoryAdmin:', error);
    throw error;
  }
};

// PUT CategoryAdmin
const updateCategoryAdmin = async (id: any, CategoryAdminData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseUpdateCategoryAdmin = await RequestApi(
      'PUT',
      `category-admin/${id}`,
      CategoryAdminData,
      headerToken,
      'Memperbarui category admin'
    );

    return reponseUpdateCategoryAdmin;
  } catch (error) {
    console.error('Kesalahan saat memperbarui category admin:', error);
    throw error;
  }
};

// DELETE CategoryAdmin
const deleteCategoryAdmin = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseDeleteCategoryAdmin = await RequestApi(
      'DELETE',
      `category-admin/${id}`,
      null,
      headerToken,
      'Menghapus category admin'
    );

    return reponseDeleteCategoryAdmin;
  } catch (error) {
    console.error('Kesalahan saat menghapus category admin:', error);
    throw error;
  }
};

// Search CategoryAdmin
const searchCategoryAdmin = async (searchInput: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseSearchCategoryAdmin = await RequestApi(
      'GET',
      `category-admin?search=${searchInput}`,
      null,
      headerToken,
      'Mencari categoryAdmin'
    );

    return responseSearchCategoryAdmin;
  } catch (error) {
    console.error('Kesalahan saat mencari categoryAdmin:', error);
    throw error;
  }
};

// Change Is Active CategoryAdmin
const changeIsActiveMasterComponent = async (
  idIsActive: any,
  newIsActive: any
) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };
    const sendData = { is_active: newIsActive };

    const responseIsActiveChange = await RequestApi(
      'PUT',
      `category-admin/is_active/${idIsActive}`,
      sendData,
      headerToken,
      'Mengubah Active Master'
    );

    return responseIsActiveChange;
  } catch (error) {
    console.error('Kesalahan saat mengubah Active Master:', error);
    throw error;
  }
};

export {
  getCategoryAdmin,
  getDetailCategoryAdmin,
  addCategoryAdmin,
  updateCategoryAdmin,
  deleteCategoryAdmin,
  searchCategoryAdmin,
  changeIsActiveMasterComponent,
};
