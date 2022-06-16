import axios from 'axios';

import {
  getMoviesStart,
  getMoviesFailure,
  getMoviesSuccess,
  deleteMoviesStart,
  deleteMovieSuccess,
  deleteMoviesFailure,
  updateMoviesStart,
  updateMovieSuccess,
  updateMoviesFailure,
  createMoviesStart,
  createMovieSuccess,
  createMoviesFailure,
} from './MovieActions';

export const getMovies = async (dispatch: any) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get('http://localhost:7002/movie');
    dispatch(getMoviesSuccess(res.data.movies));
  } catch (err) {
    console.log(err);
    dispatch(getMoviesFailure());
  }
};

export const deleteMovie = async (id: any, dispatch: any) => {
  dispatch(deleteMoviesStart());
  try {
    await axios.delete(`http://localhost:7002/movie/${id}`);
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    console.log(err);
    dispatch(deleteMoviesFailure());
  }
};
export const updateMovie = async (id: any, movie: any, dispatch: any) => {
  dispatch(updateMoviesStart());
  try {
    const res = await axios.put(`http://localhost:7002/movie/${id}`, movie);

    dispatch(updateMovieSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(updateMoviesFailure());
  }
};

// CREATE
export const createMovie = async (movie: any, dispatch: any) => {
  dispatch(createMoviesStart());
  try {
    const res = await axios.post(`http://localhost:7002/movie`, movie);
    console.log('res', res);
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(createMoviesFailure());
  }
};
