const OrdersReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ORDERS_START':
      return {
        orders: [],
        isFetching: true,
        error: false,
      };
    case 'ORDERS_SUCCESS':
      return {
        orders: action.payload,
        isFetching: false,
        error: false,
      };
    case 'ORDERS_FAILURE':
      return {
        orders: [],
        isFetching: false,
        error: true,
      };
    case 'DELETE_ORDERS_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'DELETE_ORDERS_SUCCESS':
      return {
        orders: state.orders.filter(
          (order: any) => order.id !== action.payload,
        ),
        isFetching: false,
        error: false,
      };
    case 'DELETE_ORDERS_FAILURE':
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
        orders: state.orders.map(
          (order: any) => order.id === action.payload.id && action.payload,
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
        orders: [...state.orders, action.payload],
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

export default OrdersReducer;
