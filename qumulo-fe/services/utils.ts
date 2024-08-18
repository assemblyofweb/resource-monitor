export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const formatNumber = (number: number): string => {
  return new Intl.NumberFormat().format(number);
};
