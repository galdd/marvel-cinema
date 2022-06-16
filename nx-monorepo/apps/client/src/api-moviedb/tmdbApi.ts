import axiosClient from './axiosClient';

export const category: any = {
  movie: 'movie',
  tv: 'tv',
};

export const movieType: any = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
};

export const tvType: any = {
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air',
};

const tmdbApi = {
  getMarvelList: (type: any, params: any) => {
    const url = 'list/8207011';
    return axiosClient.get(url, params);
  },
  getMoviesList: (type: any, params: any) => {
    const url = 'movie/' + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type: any, params: any) => {
    const url = 'tv/' + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cate: any, id: any) => {
    const url = category[cate] + '/' + id + '/videos';
    return axiosClient.get(url, { params: {} });
  },
  search: (cate: any, params: any) => {
    const url = 'search/' + category[cate];
    return axiosClient.get(url, params);
  },
  detail: (cate: any, id: any, params: any) => {
    console.log('cate', cate);

    const url = category[cate] + '/' + id;
    return axiosClient.get(url, params);
  },
  credits: (cate: any, id: any) => {
    const url = category[cate] + '/' + id + '/credits';
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate: any, id: any) => {
    const url = category[cate] + '/' + id + '/similar';
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
