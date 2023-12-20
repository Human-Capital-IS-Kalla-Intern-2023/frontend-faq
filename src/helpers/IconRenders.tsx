// IconRenderer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconList } from '../assets/icons/TopicIcon';
interface IconRendererProps {
  value: string;
  className?: string;
}

const IconRenderer: React.FC<IconRendererProps> = ({ value, className }) => {
  const selectedIcon = iconList.find((item: any) => item.value === value);

  if (selectedIcon) {
    return <FontAwesomeIcon icon={selectedIcon.icon} className={className} />;
  }
};

export default IconRenderer;
