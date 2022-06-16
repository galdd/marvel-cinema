import ShowReducer from './ShowReducer';
import { createContext, useContext, useReducer } from 'react';

const INITIAL_STATE = {
  shows: [],
  isFetching: false,
  error: false,
};

export const ShowContext = createContext<any>(INITIAL_STATE);

export const ShowContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(ShowReducer, INITIAL_STATE);

  return (
    <ShowContext.Provider
      value={{
        shows: state.shows,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ShowContext.Provider>
  );
};

export const useShowContext = () => useContext(ShowContext);
