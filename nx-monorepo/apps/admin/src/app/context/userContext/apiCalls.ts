import axios from 'axios';
import {
  userStart,
  userFailure,
  userSuccess,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUsersStart,
  updateUserSuccess,
  updateUsersFailure,
  createUsersStart,
  createUserSuccess,
  createUsersFailure,
} from './UserActions';

export const getAllUsers = async (dispatch: any) => {
  dispatch(userStart());
  try {
    const res = await axios.get('http://localhost:7001/users');
    console.log(res.data);

    dispatch(userSuccess(res?.data?.users));
  } catch (err) {
    dispatch(userFailure());
  }
};

export const deleteUser = async (id: any, dispatch: any) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete(`http://localhost:7001/users/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    console.log(err);
    dispatch(deleteUserFailure());
  }
};

export const createUser = async (movie: any, dispatch: any) => {
  dispatch(createUsersStart());
  try {
    const res = await axios.post(`http://localhost:7001/users`, movie);
    console.log('res', res);

    dispatch(createUserSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(createUsersFailure());
  }
};

export const updateUser = async (id: any, user: any, dispatch: any) => {
  dispatch(updateUsersStart());
  try {
    const res = await axios.put(`http://localhost:7001/users/${id}`, user);
    console.log('resb', res);

    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(updateUsersFailure());
  }
};
