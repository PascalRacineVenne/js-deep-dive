const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDay()).slice(-2);
  return {
    year,
    month,
    day,
  };
};

export default getDate;
