// Import API
const colCells = [
  { key: 'question_name', text: 'Faq Name' },
  { key: 'topic_name', text: 'Topic' },
  { key: 'question_likes', text: 'Likes' },
  { key: 'question_dislikes', text: 'Dislike' },
  { key: 'question_is_status', text: 'Active' },
];

const inputField = [
  {
    id: 'question_name',
    label: 'Faq Name',
    name: 'question_name',
    type: 'text',
  },
  {
    id: 'topic_name',
    label: 'Category Name',
    name: 'topic_name',
    type: 'text',
  },

  {
    id: 'question_is_status',
    label: 'Active',
    name: 'question_is_status',
    type: 'checkbox',
    checked: 1,
  },
];

export { colCells, inputField };
