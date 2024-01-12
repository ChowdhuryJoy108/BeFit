export const ExercisesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3520364b88mshedcdfac843b593bp134aacjsn9d744f639a0b",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3520364b88mshedcdfac843b593bp134aacjsn9d744f639a0b',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
