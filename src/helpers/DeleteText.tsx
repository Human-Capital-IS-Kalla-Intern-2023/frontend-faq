export const DeleteText = (
  customCell: Record<string, any>,
  locationPathname: string
): string => {
  if (locationPathname.includes('/admin/faq')) {
    return customCell.question;
  }

  if (locationPathname.includes('/admin/topic')) {
    return customCell.name;
  }
  return '';
};
