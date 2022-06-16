const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'db7a63f80e96ea48c7fb6da56df9190d',
  originalImage: (imgPath: any) =>
    `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: any) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
