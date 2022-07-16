export const shuffleData = data => {
  const item = data.sort(() => Math.random() - 0.5);
  return item;
};
