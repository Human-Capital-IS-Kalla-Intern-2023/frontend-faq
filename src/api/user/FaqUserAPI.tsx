// Import Helpers
import { RequestApi } from '../../helpers/RequestApi';
// import TokenHelperAdmin from '../../helpers/TokenHelper';

// GET TopicUser
const getTopicUser = async () => {
  try {
    // const token = TokenHelperAdmin();

    // const headerToken = {
    //   Authorization: `Bearer ${token}`,
    // };

    const responseGetTopicUser = await RequestApi(
      'GET',
      'faq',
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
const getListQuestionByTopic = async (slug: any) => {
  try {
    // const token = TokenHelperAdmin();

    // const headerToken = {
    //   Authorization: `Bearer ${token}`,
    // };

    const reponseGetDetailTopicUser = await RequestApi(
      'GET',
      `faq/${slug}`,
      {},
      {},
      'Mengambil list question by topic'
    );

    return reponseGetDetailTopicUser;
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat mengambil data  list question by topic:',
      error
    );
    throw error;
  }
};

const getDetailQuestion = async (slug_topic: any, slug_question: string) => {
  try {
    // const token = TokenHelperAdmin();

    // const headerToken = {
    //   Authorization: `Bearer ${token}`,
    // };

    const reponseGetDetailTopicUser = await RequestApi(
      'GET',
      `faq/${slug_topic}/${slug_question}`,
      {},
      {},
      'Mengambil detail question'
    );

    return reponseGetDetailTopicUser;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil detail question:', error);
    throw error;
  }
};

const faqLike = async (slug_topic: any, slug_question: string) => {
  try {
    // const token = TokenHelperAdmin();

    // const headerToken = {
    //   Authorization: `Bearer ${token}`,
    // };

    const responseLikeFaq = await RequestApi(
      'POST',
      `faq/${slug_topic}/${slug_question}/like`,
      {},
      {},
      'melakukan like faq'
    );

    return responseLikeFaq;
  } catch (error) {
    console.error('Terjadi kesalahan saat melakukan like faq:', error);
    throw error;
  }
};

const faqDislike = async (slug_topic: any, slug_question: string) => {
  try {
    // const token = TokenHelperAdmin();

    // const headerToken = {
    //   Authorization: `Bearer ${token}`,
    // };

    const responseDisklikeFaq = await RequestApi(
      'POST',
      `faq/${slug_topic}/${slug_question}/dislike`,
      {},
      {},
      'melakukan dislike faq'
    );

    return responseDisklikeFaq;
  } catch (error) {
    console.error('Terjadi kesalahan saat melakukan dislike faq:', error);
    throw error;
  }
};

// Search TopicUser
const searchTopicUser = async (searchInput: any) => {
  try {
    // const token = TokenHelperAdmin();

    // const headerToken = {
    //   Authorization: `Bearer ${token}`,
    // };

    const responseSearchTopicUser = await RequestApi(
      'GET',
      `faq?search=${searchInput}`,
      null,
      {},
      'Mencari FAQ'
    );

    return responseSearchTopicUser;
  } catch (error) {
    console.error('Kesalahan saat mencari topic user:', error);
    throw error;
  }
};

export {
  getTopicUser,
  getListQuestionByTopic,
  getDetailQuestion,
  searchTopicUser,
  faqLike,
  faqDislike,
};
