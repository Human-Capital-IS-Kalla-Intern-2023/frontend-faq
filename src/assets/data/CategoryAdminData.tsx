/* eslint-disable react-refresh/only-export-components */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconList } from '../icons/categoriIcon';
interface SelectOption {
  label: any;
  value: string;
}

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
    label: 'Category Icon',
    name: 'icons_name',
    icons: true,
    type: 'select',
    options: [] as SelectOption[],
  },
  {
    id: 'is_active',
    label: 'Active',
    name: 'is_active',
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
    const iconsField = inputField.find(
      (field) => field.label === 'Category Icon'
    );
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
