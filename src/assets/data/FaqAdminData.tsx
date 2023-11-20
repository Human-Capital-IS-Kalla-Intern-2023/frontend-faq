// Import API
const colCells = [
  { key: 'faq_name', text: 'Faq Name' },
  { key: 'category_name', text: 'Category' },
  { key: 'likes', text: 'Likes' },
  { key: 'dislikes', text: 'Dislike' },
  { key: 'is_active', text: 'Active' },
];

const inputField = [
  {
    id: 'faq_name',
    label: 'Faq Name',
    name: 'faq_name',
    type: 'text',
  },
  {
    id: 'category_name',
    label: 'Category Name',
    name: 'category_name',
    type: 'text',
  },

  {
    id: 'is_active',
    label: 'Active',
    name: 'is_active',
    type: 'checkbox',
    checked: 1,
  },
];

export { colCells, inputField };
