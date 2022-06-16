import UserReducer from './UserReducer';
import { createContext, useContext, useReducer } from 'react';

const INITIAL_STATE = {
  users: [],
  isFetching: false,
  error: false,
};

export const UserContext = createContext<any>(INITIAL_STATE);

export const UserContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => useContext(UserContext);
