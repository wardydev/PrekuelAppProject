export const getSomeStringArticleTitle = string => {
  const title = [];
  const titleArr = Array.from(string).slice(0, 35).join('');

  title.push(titleArr + '...');

  return title;
};
