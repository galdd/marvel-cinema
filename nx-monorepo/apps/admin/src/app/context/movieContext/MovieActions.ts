// GET ALL MOVIES
export const getMoviesStart = () => ({
  type: 'MOVIES_START',
});
export const getMoviesSuccess = (movies: any) => ({
  type: 'MOVIES_SUCCESS',
  payload: movies,
});
export const getMoviesFailure = () => ({
  type: 'MOVIES_FAILURE',
});

// GET SINGLE MOVIE

// DELETE A MOVIE
export const deleteMoviesStart = () => ({
  type: 'DELETE_MOVIES_START',
});
export const deleteMovieSuccess = (id: any) => ({
  type: 'DELETE_MOVIES_SUCCESS',
  payload: id,
});
export const deleteMoviesFailure = () => ({
  type: 'DELETE_MOVIES_FAILURE',
});

// DELETE A MOVIE
export const updateMoviesStart = () => ({
  type: 'UPDATE_MOVIES_START',
});
export const updateMovieSuccess = (updatedMovie: any) => ({
  type: 'UPDATE_MOVIES_SUCCESS',
  payload: updatedMovie,
});
export const updateMoviesFailure = () => ({
  type: 'UPDATE_MOVIES_FAILURE',
});

// CREATE A MOVIE
export const createMoviesStart = () => ({
  type: 'CREATE_MOVIES_START',
});
export const createMovieSuccess = (newMovie: any) => ({
  type: 'CREATE_MOVIES_SUCCESS',
  payload: newMovie,
});
export const createMoviesFailure = () => ({
  type: 'CREATE_MOVIES_FAILURE',
});
