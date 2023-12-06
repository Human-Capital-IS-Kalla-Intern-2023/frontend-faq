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
      'faq/questions',
      {},
      headerToken,
      'Mengambil FAQ admin'
    );

    return responseGetFaqAdmin;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data faq admin:', error);
    throw error;
  }
};

// GET Detail FaqAdmin
const getDetailFaqAdmin = async (slug: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDetailFaqAdmin = await RequestApi(
      'GET',
      `faq/questions/${slug}`,
      {},
      headerToken,
      'Mengambil detail FAQ admin'
    );

    return reponseGetDetailFaqAdmin;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data FAQ admin:', error);
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
      'faq/questions',
      formData,
      headerToken,
      'Membuat FAQ admin'
    );

    return reponseAddFaqAdmin;
  } catch (error) {
    console.error('Kesalahan saat membuat FAQ admin:', error);
    throw error;
  }
};

// PUT FaqAdmin
const updateFaqAdmin = async (slug: any, FaqAdminData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseUpdateFaqAdmin = await RequestApi(
      'PUT',
      `faq/questions/${slug}`,
      FaqAdminData,
      headerToken,
      'Memperbarui FAQ admin'
    );

    return reponseUpdateFaqAdmin;
  } catch (error) {
    console.error('Kesalahan saat memperbarui FAQ admin:', error);
    throw error;
  }
};

// DELETE FaqAdmin
const deleteFaqAdmin = async (slug: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseDeleteFaqAdmin = await RequestApi(
      'DELETE',
      `faq/questions/${slug}`,
      null,
      headerToken,
      'Menghapus FAQ admin'
    );

    return reponseDeleteFaqAdmin;
  } catch (error) {
    console.error('Kesalahan saat menghapus FAQ admin:', error);
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
      `faq/questions?search=${searchInput}`,
      null,
      headerToken,
      'Mencari FAQ'
    );

    return responseSearchFaqAdmin;
  } catch (error) {
    console.error('Kesalahan saat mencari FAQ admin:', error);
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
    const sendData = { is_status: newIsActive };

    const responseIsActiveChange = await RequestApi(
      'PUT',
      `faq/questions/is_active/${idIsActive}`,
      sendData,
      headerToken,
      'Mengubah active FAQ admin'
    );

    return responseIsActiveChange;
  } catch (error) {
    console.error('Kesalahan saat mengubah active FAQ admin:', error);
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
