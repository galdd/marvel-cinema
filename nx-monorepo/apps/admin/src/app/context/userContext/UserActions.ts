// GET ALL USERS
export const userStart = () => ({
  type: 'USER_START',
});
export const userSuccess = (users: any) => ({
  type: 'USER_SUCCESS',
  payload: users,
});
export const userFailure = () => ({
  type: 'USER_FAILURE',
});

// GET SINGLE USER

// DELETE A USER
export const deleteUserStart = () => ({
  type: 'DELETE_USER_START',
});
export const deleteUserSuccess = (id: any) => ({
  type: 'DELETE_USER_SUCCESS',
  payload: id,
});
export const deleteUserFailure = () => ({
  type: 'DELETE_USER_FAILURE',
});

// UPDATE A MOVIE
export const updateUsersStart = () => ({
  type: 'UPDATE_USER_START',
});
export const updateUserSuccess = (updatedUser: any) => ({
  type: 'UPDATE_USER_SUCCESS',
  payload: updatedUser,
});
export const updateUsersFailure = () => ({
  type: 'UPDATE_USER_FAILURE',
});

// CREATE A USER
export const createUsersStart = () => ({
  type: 'CREATE_USERS_START',
});
export const createUserSuccess = (newUser: any) => ({
  type: 'CREATE_USERS_SUCCESS',
  payload: newUser,
});
export const createUsersFailure = () => ({
  type: 'CREATE_USERS_FAILURE',
});
