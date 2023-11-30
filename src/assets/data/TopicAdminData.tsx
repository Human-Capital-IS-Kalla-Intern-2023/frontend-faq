/* eslint-disable react-refresh/only-export-components */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconList } from '../icons/TopicIcon';
import { apiEnum } from '../../state/enum/ApiEnum';
interface SelectOption {
  label: any;
  value: string;
}

// Import API

const colCells = [
  { key: apiEnum.NAME, text: 'topic name' },
  { key: apiEnum.AUTHOR, text: 'author' },
  { keys: [apiEnum.ICON, apiEnum.IMAGE], text: 'icon' },
  { key: apiEnum.IS_STATUS, text: 'active' },
];

const inputField = [
  {
    id: apiEnum.NAME,
    label: 'topic name',
    name: apiEnum.NAME,
    type: 'text',
  },
  {
    id: apiEnum.DESCRIPTION,
    label: 'description ',
    name: apiEnum.DESCRIPTION,
    type: 'textarea',
  },
  {
    id: apiEnum.ICON,
    label: 'icon',
    name: apiEnum.ICON,
    icons: true,
    type: 'select',
    options: [] as SelectOption[],
  },
  {
    id: apiEnum.IS_STATUS,
    label: 'active',
    name: apiEnum.IS_STATUS,
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

    // Find the 'Topic Icon' field in the inputField array
    const iconsField = inputField.find((field) => field.label === 'icon');
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
