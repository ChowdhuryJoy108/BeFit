export const ExercisesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "67616e1ebbmshc721c9d51b7cd47p161b08jsn534a4cd4209f",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

//67616e1ebbmshc721c9d51b7cd47p161b08jsn534a4cd4209f
// old-3520364b88mshedcdfac843b593bp134aacjsn9d744f639a0b

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '67616e1ebbmshc721c9d51b7cd47p161b08jsn534a4cd4209f',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
