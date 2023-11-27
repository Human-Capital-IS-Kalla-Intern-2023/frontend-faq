export const DeleteText = (
  customCell: Record<string, any>,
  locationPathname: string
): string => {
  if (locationPathname.includes('/admin/faq')) {
    return customCell.question_name;
  }

  if (locationPathname.includes('/admin/topic')) {
    return customCell.topic_name;
  }
  return '';
};
