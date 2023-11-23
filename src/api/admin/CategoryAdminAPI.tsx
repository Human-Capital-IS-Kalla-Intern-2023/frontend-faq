// Import Helpers
import { RequestApi } from '../../helpers/RequestApi';
import TokenHelper from '../../helpers/TokenHelpers';

// GET CategoryAdmin
const getCategoryAdmin = async () => {
  try {
    // const token = TokenHelper();

    // const headerToken = {
    //   Authorization: `Bearer ${token}`,
    // };

    const responseGetCategoryAdmin = await RequestApi(
      'GET',
      'faq/topics',
      {},
      {},
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
      `faq/topics/${id}`,
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
      'faq/topics',
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
      `faq/topics/${id}`,
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
      `faq/topics/${id}`,
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
    // const token = TokenHelper();

    // const headerToken = {
    //   Authorization: `Bearer ${token}`,
    // };

    const responseSearchCategoryAdmin = await RequestApi(
      'GET',
      `faq/topics?search=${searchInput}`,
      null,
      {},
      'Mencari categoryAdmin'
    );

    return responseSearchCategoryAdmin;
  } catch (error) {
    console.error('Kesalahan saat mencari category admin:', error);
    throw error;
  }
};

// Change Is Active CategoryAdmin
const changeIsActiveCategoryAdmin = async (
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
      'Mengubah Active Category Admin'
    );

    return responseIsActiveChange;
  } catch (error) {
    console.error('Kesalahan saat mengubah Active Category Admin:', error);
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
  changeIsActiveCategoryAdmin,
};
