import { useState } from 'react';
import useAuthContext from './useAuthContext';
import { useNavigate } from 'react-router-dom';
import Alert from '../utils/Alert';

const useLogout = () => {
  const { dispatch } = useAuthContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const logout = async () => {
    setIsLoading(true);
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
    Alert({ title: 'Success', text: 'Logout success', icon: 'success' });
    setIsLoading(false);
    navigate('/login');
  };

  return { logout, isLoading };
};

export default useLogout;
