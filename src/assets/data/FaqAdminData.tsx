// Import Type
import { apiEnum } from '../../state/enum/ApiEnum';

const colCells = [
  { key: apiEnum.QUESTION, text: 'faq name' },
  { key: apiEnum.NAME, text: 'topic name' },
  { key: apiEnum.LIKES, text: 'likes' },
  { key: apiEnum.DISLIKES, text: 'dislike' },
  { key: apiEnum.IS_STATUS, text: 'active' },
];

const colCellsWithoutTopic = [
  { key: apiEnum.QUESTION, text: 'faq name' },
  { key: apiEnum.LIKES, text: 'likes' },
  { key: apiEnum.DISLIKES, text: 'dislike' },
  { key: apiEnum.IS_STATUS, text: 'active' },
];

const inputField = [
  {
    id: apiEnum.QUESTION,
    label: 'Faq Name',
    name: apiEnum.QUESTION,
    type: 'text',
  },
  {
    id: apiEnum.NAME,
    label: 'Topic Name',
    name: apiEnum.NAME,
    type: 'text',
  },

  {
    id: apiEnum.IS_STATUS,
    label: 'active',
    name: apiEnum.IS_STATUS,
    type: 'checkbox',
    checked: 1,
  },
];

export { colCells, colCellsWithoutTopic, inputField };
