// Import Helpers
import { RequestApi } from '../../helpers/RequestApi';
import TokenHelper from '../../helpers/TokenHelpers';

// GET FaqAdmin
const getFaqAdmin = async () => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetFaqAdmin = await RequestApi(
      'GET',
      'category-admin',
      {},
      headerToken,
      'Mengambil faq admin'
    );

    return responseGetFaqAdmin;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data faqAdmin:', error);
    throw error;
  }
};

// GET Detail FaqAdmin
const getDetailFaqAdmin = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDetailFaqAdmin = await RequestApi(
      'GET',
      `category-admin/${id}`,
      {},
      headerToken,
      'Mengambil detail faq admin'
    );

    return reponseGetDetailFaqAdmin;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data faq admin:', error);
    throw error;
  }
};

// POST FaqAdmin
const addFaqAdmin = async (formData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseAddFaqAdmin = await RequestApi(
      'POST',
      'category-admin',
      formData,
      headerToken,
      'Membuat faq admin'
    );

    return reponseAddFaqAdmin;
  } catch (error) {
    console.error('Kesalahan saat membuat faq admin:', error);
    throw error;
  }
};

// PUT FaqAdmin
const updateFaqAdmin = async (id: any, FaqAdminData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseUpdateFaqAdmin = await RequestApi(
      'PUT',
      `category-admin/${id}`,
      FaqAdminData,
      headerToken,
      'Memperbarui faq admin'
    );

    return reponseUpdateFaqAdmin;
  } catch (error) {
    console.error('Kesalahan saat memperbarui faq admin:', error);
    throw error;
  }
};

// DELETE FaqAdmin
const deleteFaqAdmin = async (id: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseDeleteFaqAdmin = await RequestApi(
      'DELETE',
      `category-admin/${id}`,
      null,
      headerToken,
      'Menghapus faq admin'
    );

    return reponseDeleteFaqAdmin;
  } catch (error) {
    console.error('Kesalahan saat menghapus faq admin:', error);
    throw error;
  }
};

// Search FaqAdmin
const searchFaqAdmin = async (searchInput: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseSearchFaqAdmin = await RequestApi(
      'GET',
      `category-admin?search=${searchInput}`,
      null,
      headerToken,
      'Mencari faqAdmin'
    );

    return responseSearchFaqAdmin;
  } catch (error) {
    console.error('Kesalahan saat mencari faq admin:', error);
    throw error;
  }
};

// Change Is Active FaqAdmin
const changeIsActiveFaqAdmin = async (idIsActive: any, newIsActive: any) => {
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
      'Mengubah active faq admin'
    );

    return responseIsActiveChange;
  } catch (error) {
    console.error('Kesalahan saat mengubah active faq admin:', error);
    throw error;
  }
};

export {
  getFaqAdmin,
  getDetailFaqAdmin,
  addFaqAdmin,
  updateFaqAdmin,
  deleteFaqAdmin,
  searchFaqAdmin,
  changeIsActiveFaqAdmin,
};