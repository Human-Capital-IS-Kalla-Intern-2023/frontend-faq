// Import API

const colCells = [
  { key: 'category_name', text: 'Category Name' },
  { key: 'total_used', text: 'Total Used' },
  { key: 'is_active', text: 'Active' },
];

const inputField = [
  {
    id: 'category_name',
    label: 'Category Name',
    name: 'category_name',
    type: 'text',
  },
  {
    id: 'icons_name',
    label: 'Icons',
    name: 'icons_name',
    type: 'img',
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
