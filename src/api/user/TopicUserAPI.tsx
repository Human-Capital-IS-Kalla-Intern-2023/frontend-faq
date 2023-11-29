// Import Helpers
import { RequestApi } from '../../helpers/RequestApi';
import TokenHelper from '../../helpers/TokenHelpers';

// GET TopicUser
const getTopicUser = async () => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseGetTopicUser = await RequestApi(
      'GET',
      'faq/topics',
      {},
      {},
      'Mengambil topic user'
    );

    return responseGetTopicUser;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data topic user:', error);
    throw error;
  }
};

// GET Detail TopicUser
const getDetailTopicUser = async (slug: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseGetDetailTopicUser = await RequestApi(
      'GET',
      `faq/topics/${slug}`,
      {},
      headerToken,
      'Mengambil detail topic user'
    );

    return reponseGetDetailTopicUser;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data topicUser:', error);
    throw error;
  }
};

// POST TopicUser
const addTopicUser = async (formData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseAddTopicUser = await RequestApi(
      'POST',
      'faq/topics',
      formData,
      headerToken,
      'Membuat topic user'
    );

    return reponseAddTopicUser;
  } catch (error) {
    console.error('Kesalahan saat membuat topicUser:', error);
    throw error;
  }
};

// PUT TopicUser
const updateTopicUser = async (slug: any, TopicUserData: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseUpdateTopicUser = await RequestApi(
      'PUT',
      `faq/topics/${slug}`,
      TopicUserData,
      headerToken,
      'Memperbarui topic user'
    );

    return reponseUpdateTopicUser;
  } catch (error) {
    console.error('Kesalahan saat memperbarui topic user:', error);
    throw error;
  }
};

// DELETE TopicUser
const deleteTopicUser = async (slug: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const reponseDeleteTopicUser = await RequestApi(
      'DELETE',
      `faq/topics/${slug}`,
      null,
      {},
      'Menghapus topic user'
    );

    return reponseDeleteTopicUser;
  } catch (error) {
    console.error('Kesalahan saat menghapus topic user:', error);
    throw error;
  }
};

// Search TopicUser
const searchTopicUser = async (searchInput: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };

    const responseSearchTopicUser = await RequestApi(
      'GET',
      `faq/topics?search=${searchInput}`,
      null,
      {},
      'Mencari topicUser'
    );

    return responseSearchTopicUser;
  } catch (error) {
    console.error('Kesalahan saat mencari topic user:', error);
    throw error;
  }
};

// Change Is Active TopicUser
const changeIsActiveTopicUser = async (idIsActive: any, newIsActive: any) => {
  try {
    const token = TokenHelper();

    const headerToken = {
      Authorization: `Bearer ${token}`,
    };
    const sendData = { is_active: newIsActive };

    const responseIsActiveChange = await RequestApi(
      'PUT',
      `topic-user/is_active/${idIsActive}`,
      sendData,
      headerToken,
      'Mengubah Active Topic User'
    );

    return responseIsActiveChange;
  } catch (error) {
    console.error('Kesalahan saat mengubah Active Topic User:', error);
    throw error;
  }
};

export {
  getTopicUser,
  getDetailTopicUser,
  addTopicUser,
  updateTopicUser,
  deleteTopicUser,
  searchTopicUser,
  changeIsActiveTopicUser,
};
