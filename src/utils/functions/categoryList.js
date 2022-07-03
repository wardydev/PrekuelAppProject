export const categoryList = categoryId => {
  let category;
  switch (categoryId) {
    case 42:
      return (category = 'Action');
    case 29:
      return (category = 'DC');
    case 38:
      return (category = 'Anime');
    case 50:
      return (category = 'Disney+');
    case 40:
      return (category = 'Indo');
    case 164:
      return (category = 'Game');
    case 31:
      return (category = 'Hollywood');
    case 186:
      return (category = 'Internet');
    case 20:
      return (category = 'K-Drama');
    case 28:
      return (category = 'Marvel');
    case 161:
      return (category = 'Movie News');
    case 57:
      return (category = 'Music');
    case 39:
      return (category = 'Netflix');
    case 162:
      return (category = 'Serial TV');
    default:
      return 'Uncategorized';
  }
};
