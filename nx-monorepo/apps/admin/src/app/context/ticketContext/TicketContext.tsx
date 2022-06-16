import TicketReducer from './TIcketReducer';
import { createContext, useContext, useReducer } from 'react';

const INITIAL_STATE = {
  tickets: [],
  isFetching: false,
  error: false,
};

export const TicketContext = createContext<any>(INITIAL_STATE);

export const TicketContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(TicketReducer, INITIAL_STATE);

  return (
    <TicketContext.Provider
      value={{
        tickets: state.tickets,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTicketContext = () => useContext(TicketContext);
