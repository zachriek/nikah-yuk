import { createContext, useReducer, useEffect } from 'react';
import { authReducer } from '../reducers/authReducer';

export const AuthContext = createContext({} as any);

const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') as any);
    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
    }
  }, []);

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
