import MovieReducer from './MovieReducer';
import { createContext, useContext, useReducer } from 'react';

const INITIAL_STATE = {
  movies: [],
  isFetching: false,
  error: false,
};

export const MovieContext = createContext<any>(INITIAL_STATE);

export const MovieContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
