// export const BASE_URL = "https://newsapi.org/v2";

// export const getNewsAPI = (keyword) => {
//   const apiKey = "d2b2c276234c440db00653c7820257e1";
//   const queryParams = keyword ? `&q=${encodeURIComponent('bitcoin')}` : '';
//   return `${BASE_URL}/everything?apiKey=${apiKey}${queryParams}`;
// };

// export const BASE_URL = "https://newsapi.org/v2";

// export const getNewsAPI = (keyword) => {
//   const apiKey = "d2b2c276234c440db00653c7820257e1";
//   return `${BASE_URL}/everything?apiKey=${apiKey}${keyword ? `&q=${encodeURIComponent("new")}` : ''}`;
// };

export const BASE_URL = "https://newsapi.org/v2";

export const getNewsAPI = (countryCode) => {
  const apiKey = "d2b2c276234c440db00653c7820257e1";
  return `${BASE_URL}/top-headlines?country=${'in'}&category=technology&apiKey=${apiKey}`;
};