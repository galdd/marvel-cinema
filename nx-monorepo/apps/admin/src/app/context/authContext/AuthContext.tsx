import AuthReducer from './AuthReducer';
import { createContext, useContext, useEffect, useReducer } from 'react';

type State = {
  user: any;
  isFetching: boolean;
  error: boolean;
  dispatch: React.Dispatch<any>;
};

const INITIAL_STATE = {
  // user: JSON.parse(localStorage.getItem("user")) || null,
  user: '',
  isFetching: false,
  error: false,
  dispatch: () => null,
};

// export const AuthContext = createContext<any>(INITIAL_STATE);

export const AuthContext = createContext<State>(INITIAL_STATE);

export const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
