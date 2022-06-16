import axios from 'axios';
import {
  getShowStart,
  getShowFailure,
  getShowSuccess,
  deleteShowStart,
  deleteShowSuccess,
  deleteShowFailure,
  updateShowStart,
  updateShowSuccess,
  updateShowFailure,
  createShowStart,
  createShowSuccess,
  createShowFailure,
} from './ShowActions';

export const getShows = async (dispatch: any) => {
  dispatch(getShowStart());
  try {
    const res = await axios.get('http://localhost:7002/show');
    console.log('res', res.data.shows);

    dispatch(getShowSuccess(res.data.shows));
  } catch (err) {
    console.log(err);
    dispatch(getShowFailure());
  }
};

export const deleteShow = async (id: any, dispatch: any) => {
  dispatch(deleteShowStart());
  try {
    await axios.delete(`http://localhost:7002/show/${id}`);
    dispatch(deleteShowSuccess(id));
  } catch (err: any) {
    console.log(err);
    dispatch(deleteShowFailure());
  }
};
export const updateShow = async (id: any, show: any, dispatch: any) => {
  dispatch(updateShowStart());
  try {
    const res = await axios.put(`http://localhost:7002/show/${id}`, show);

    dispatch(updateShowSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(updateShowFailure());
  }
};

// CREATE
export const createShow = async (show: any, dispatch: any) => {
  dispatch(createShowStart());
  try {
    console.log('show', show);

    const res = await axios.post(`http://localhost:7002/show`, show);
    console.log(res.data);

    dispatch(createShowSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(createShowFailure());
  }
};
