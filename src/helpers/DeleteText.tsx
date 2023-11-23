export const DeleteText = (
  customCell: Record<string, any>,
  locationPathname: string
): string => {
  if (locationPathname.includes('/admin/faq')) {
    return customCell.faq_name;
  }

  if (locationPathname.includes('/admin/topic')) {
    return customCell.name;
  }
  return '';
};
