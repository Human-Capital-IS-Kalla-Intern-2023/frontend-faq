// Import Helpers
import { RequestApi } from '../../helpers/RequestApi';
import TokenHelper from '../../helpers/TokenHelpers';

// GET TopicAdmin
const getTopicAdmin = async () => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetTopicAdmin = await RequestApi(
      'GET',
      'faq/topics',
      {},
      headerToken,
      'Mengambil topic admin'
    );

    return responseGetTopicAdmin;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data topicAdmin:', error);
    throw error;
  }
};

// GET Detail TopicAdmin
const getDetailTopicAdmin = async (slug: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDetailTopicAdmin = await RequestApi(
      'GET',
      `faq/topics/${slug}`,
      {},
      headerToken,
      'Mengambil detail topic admin'
    );

    return reponseGetDetailTopicAdmin;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data topicAdmin:', error);
    throw error;
  }
};

// POST TopicAdmin
const addTopicAdmin = async (formData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };

    const reponseAddTopicAdmin = await RequestApi(
      'POST',
      'faq/topics',
      formData,
      headerToken,
      'Membuat topic admin'
    );

    return reponseAddTopicAdmin;
  } catch (error) {
    console.error('Kesalahan saat membuat topicAdmin:', error);
    throw error;
  }
};

// PUT TopicAdmin
const updateTopicAdmin = async (slug: any, TopicAdminData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseUpdateTopicAdmin = await RequestApi(
      'PUT',
      `faq/topics/${slug}`,
      TopicAdminData,
      headerToken,
      'Memperbarui topic admin'
    );

    return reponseUpdateTopicAdmin;
  } catch (error) {
    console.error('Kesalahan saat memperbarui topic admin:', error);
    throw error;
  }
};

// DELETE TopicAdmin
const deleteTopicAdmin = async (slug: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseDeleteTopicAdmin = await RequestApi(
      'DELETE',
      `faq/topics/${slug}`,
      null,
      headerToken,
      'Menghapus topic admin'
    );

    return reponseDeleteTopicAdmin;
  } catch (error) {
    console.error('Kesalahan saat menghapus topic admin:', error);
    throw error;
  }
};

// Search TopicAdmin
const searchTopicAdmin = async (searchInput: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseSearchTopicAdmin = await RequestApi(
      'GET',
      `faq/topics?search=${searchInput}`,
      null,
      headerToken,
      'Mencari topicAdmin'
    );

    return responseSearchTopicAdmin;
  } catch (error) {
    console.error('Kesalahan saat mencari topic admin:', error);
    throw error;
  }
};

// Change Is Active TopicAdmin
const changeIsActiveTopicAdmin = async (slugTopic: any, newIsActive: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };
    const sendData = { is_status: newIsActive };

    const responseIsActiveChange = await RequestApi(
      'PUT',
      `faq/is_active/${slugTopic}`,
      sendData,
      headerToken,
      'Mengubah Active Topic Admin'
    );

    return responseIsActiveChange;
  } catch (error) {
    console.error('Kesalahan saat mengubah Active Topic Admin:', error);
    throw error;
  }
};

export {
  getTopicAdmin,
  getDetailTopicAdmin,
  addTopicAdmin,
  updateTopicAdmin,
  deleteTopicAdmin,
  searchTopicAdmin,
  changeIsActiveTopicAdmin,
};
