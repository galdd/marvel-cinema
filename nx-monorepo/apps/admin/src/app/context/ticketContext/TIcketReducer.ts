const TicketsReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'MOVIES_START':
      return {
        tickets: [],
        isFetching: true,
        error: false,
      };
    case 'MOVIES_SUCCESS':
      return {
        tickets: action.payload,
        isFetching: false,
        error: false,
      };
    case 'MOVIES_FAILURE':
      return {
        tickets: [],
        isFetching: false,
        error: true,
      };
    case 'DELETE_MOVIES_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'DELETE_MOVIES_SUCCESS':
      return {
        tickets: state.tickets.filter(
          (ticket: any) => ticket.id !== action.payload,
        ),
        isFetching: false,
        error: false,
      };
    case 'DELETE_MOVIES_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case 'UPDATE_MOVIE_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'UPDATE_MOVIE_SUCCESS':
      return {
        tickets: state.tickets.map(
          (ticket: any) => ticket.id === action.payload.id && action.payload,
        ),
        isFetching: false,
        error: false,
      };
    case 'UPDATE_MOVIE_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case 'CREATE_MOVIE_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'CREATE_MOVIE_SUCCESS':
      return {
        tickets: [...state.tickets, action.payload],
        isFetching: false,
        error: false,
      };
    case 'CREATE_MOVIE_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default TicketsReducer;
