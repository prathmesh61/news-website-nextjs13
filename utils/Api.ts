export const BASE_URL = "https://saurav.tech/NewsAPI/";

export const getNewsAPI = async (category: string, country = "in") => {
  return `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
};
