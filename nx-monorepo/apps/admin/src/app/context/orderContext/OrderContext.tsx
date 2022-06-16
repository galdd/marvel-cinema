import OrderReducer from './OrderReducer';
import { createContext, useContext, useReducer } from 'react';

const INITIAL_STATE = {
  orders: [],
  isFetching: false,
  error: false,
};

export const OrderContext = createContext<any>(INITIAL_STATE);

export const OrderContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(OrderReducer, INITIAL_STATE);

  return (
    <OrderContext.Provider
      value={{
        orders: state.orders,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
