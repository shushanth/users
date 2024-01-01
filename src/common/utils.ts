export const getDateFormat = (date: Date): string => {
  return `${date?.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} `;
};

export const getTime = (date: Date): string => {
  const hours = date.getHours() < 9 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${hours}: ${minutes}`;
};
