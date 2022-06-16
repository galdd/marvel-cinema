const ShowReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SHOW_START':
      return {
        shows: [],
        isFetching: true,
        error: false,
      };
    case 'SHOW_SUCCESS':
      return {
        shows: action.payload,
        isFetching: false,
        error: false,
      };
    case 'SHOW_FAILURE':
      return {
        shows: [],
        isFetching: false,
        error: true,
      };
    case 'DELETE_SHOW_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'DELETE_SHOW_SUCCESS':
      return {
        shows: state.shows.filter((show: any) => show._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case 'DELETE_SHOW_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case 'UPDATE_SHOW_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'UPDATE_SHOW_SUCCESS':
      return {
        shows: state.shows.map(
          (show: any) => show._id === action.payload._id && action.payload,
        ),
        isFetching: false,
        error: false,
      };
    case 'UPDATE_SHOW_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case 'CREATE_SHOW_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'CREATE_SHOW_SUCCESS':
      return {
        shows: [...state.shows, action.payload],
        isFetching: false,
        error: false,
      };
    case 'CREATE_SHOW_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default ShowReducer;
