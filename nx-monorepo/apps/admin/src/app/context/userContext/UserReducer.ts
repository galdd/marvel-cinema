const UserReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'USER_START':
      return {
        users: [],
        isFetching: true,
        error: false,
      };
    case 'USER_SUCCESS':
      return {
        users: action.payload,
        isFetching: false,
        error: false,
      };
    case 'USER_FAILURE':
      return {
        users: [],
        isFetching: false,
        error: true,
      };
    case 'DELETE_USER_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'DELETE_USER_SUCCESS':
      return {
        users: state.users.filter((user: any) => user._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case 'DELETE_USER_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default UserReducer;
