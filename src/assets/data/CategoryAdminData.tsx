/* eslint-disable react-refresh/only-export-components */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconList } from '../icons/categoriIcon';
interface SelectOption {
  label: any;
  value: string;
}

// Import API

const colCells = [
  { key: 'topic_name', text: 'Category Name' },
  { key: 'topic_author', text: 'Author' },
  { key: 'topic_image', text: 'Icon' },
  { key: 'topic_is_status', text: 'Active' },
];

const inputField = [
  {
    id: 'topic_name',
    label: 'Category Name',
    name: 'topic_name',
    type: 'text',
  },
  {
    id: 'topic_description',
    label: 'Description ',
    name: 'topic_description',
    type: 'text-area',
  },
  {
    id: 'topic_image',
    label: 'Category',
    name: 'topic_image',
    icons: true,
    type: 'select',
    options: [] as SelectOption[],
  },
  {
    id: 'topic_is_status',
    label: 'Active',
    name: 'topic_is_status',
    type: 'checkbox',
    checked: 1,
  },
];

const generateIconOptions = () => {
  return iconList.map(({ value, icon }) => ({
    value,
    icon: <FontAwesomeIcon icon={icon} />,
  }));
};

const getIconList = async () => {
  try {
    const iconOptions = generateIconOptions();

    // Find the 'Category Icon' field in the inputField array
    const iconsField = inputField.find((field) => field.label === 'Category');
    if (iconsField) {
      iconsField.options = iconOptions.map((option) => ({
        value: option.value,
        label: (
          <>
            {option.icon} {option.value}
          </>
        ),
      }));
    }
  } catch (error) {
    console.error('Error fetching icon');
  }
};

export { colCells, inputField, getIconList };
