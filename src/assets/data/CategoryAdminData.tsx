/* eslint-disable react-refresh/only-export-components */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconList } from '../icons/categoriIcon';
import { topicEnum } from '../../state/enum/topicEnum';
interface SelectOption {
  label: any;
  value: string;
}

// Import API

const colCells = [
  { key: topicEnum.TOPICNAME, text: 'category name' },
  { key: topicEnum.TOPIC_AUTHOR, text: 'author' },
  { key: topicEnum.TOPIC_IMAGE, text: 'icon' },
  { key: topicEnum.TOPIC_STATUS, text: 'active' },
];

const inputField = [
  {
    id: topicEnum.TOPICNAME,
    label: 'category name',
    name: topicEnum.TOPICNAME,
    type: 'text',
  },
  {
    id: topicEnum.TOPIC_DESCRIPTION,
    label: 'description ',
    name: topicEnum.TOPIC_DESCRIPTION,
    type: 'text-area',
  },
  {
    id: topicEnum.TOPIC_IMAGE,
    label: 'icon',
    name: topicEnum.TOPIC_IMAGE,
    icons: true,
    type: 'select',
    options: [] as SelectOption[],
  },
  {
    id: topicEnum.TOPIC_STATUS,
    label: 'active',
    name: topicEnum.TOPIC_STATUS,
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
