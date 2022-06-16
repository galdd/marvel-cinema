// GET ALL MOVIES
export const getShowStart = () => ({
  type: 'SHOW_START',
});
export const getShowSuccess = (shows: any) => ({
  type: 'SHOW_SUCCESS',
  payload: shows,
});
export const getShowFailure = () => ({
  type: 'SHOW_FAILURE',
});

// GET SINGLE MOVIE

// DELETE A MOVIE
export const deleteShowStart = () => ({
  type: 'DELETE_SHOW_START',
});
export const deleteShowSuccess = (id: any) => ({
  type: 'DELETE_SHOW_SUCCESS',
  payload: id,
});
export const deleteShowFailure = () => ({
  type: 'DELETE_SHOW_FAILURE',
});

// DELETE A MOVIE
export const updateShowStart = () => ({
  type: 'UPDATE_SHOW_START',
});
export const updateShowSuccess = (updatedShow: any) => ({
  type: 'UPDATE_SHOW_SUCCESS',
  payload: updatedShow,
});
export const updateShowFailure = () => ({
  type: 'UPDATE_SHOW_FAILURE',
});

// CREATE A MOVIE
export const createShowStart = () => ({
  type: 'CREATE_SHOW_START',
});
export const createShowSuccess = (newShow: any) => ({
  type: 'CREATE_SHOW_SUCCESS',
  payload: newShow,
});
export const createShowFailure = () => ({
  type: 'CREATE_SHOW_FAILURE',
});
