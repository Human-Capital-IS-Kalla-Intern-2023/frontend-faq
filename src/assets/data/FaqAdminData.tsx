// Import Type
import { questionEnum } from '../../state/enum/questionEnum';
import { topicEnum } from '../../state/enum/topicEnum';

const colCells = [
  { key: questionEnum.QUESTION_NAME, text: 'faq name' },
  { key: topicEnum.TOPICNAME, text: 'topic' },
  { key: questionEnum.QUESTION_LIKES, text: 'likes' },
  { key: questionEnum.QUESTION_DISLIKES, text: 'dislike' },
  { key: questionEnum.QUESTION_STATUS, text: 'active' },
];

const inputField = [
  {
    id: questionEnum.QUESTION_NAME,
    label: 'Faq Name',
    name: questionEnum.QUESTION_NAME,
    type: 'text',
  },
  {
    id: topicEnum.TOPICNAME,
    label: 'Topic Name',
    name: topicEnum.TOPICNAME,
    type: 'text',
  },

  {
    id: questionEnum.QUESTION_STATUS,
    label: 'active',
    name: questionEnum.QUESTION_STATUS,
    type: 'checkbox',
    checked: 1,
  },
];

export { colCells, inputField };
