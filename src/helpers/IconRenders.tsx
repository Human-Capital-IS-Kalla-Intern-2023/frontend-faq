// IconRenderer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconList } from '../assets/icons/topicIcon';
interface IconRendererProps {
  value: string;
}

const IconRenderer: React.FC<IconRendererProps> = ({ value }) => {
  const selectedIcon = iconList.find((item: any) => item.value === value);

  if (selectedIcon) {
    return <FontAwesomeIcon icon={selectedIcon.icon} className="w-7 h-7" />;
  }
};

export default IconRenderer;
