export const DeleteText = (
  customCell: Record<string, any>,
  locationPathname: string
): string => {
  if (locationPathname.includes('/admin/faq')) {
    return customCell.faq_name;
  }

  if (locationPathname.includes('admin/category')) {
    return customCell.category_name;
  }
  return '';
};
