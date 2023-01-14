import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthContext from './useAuthContext';
import Alert from '../utils/Alert';

const useLogin = () => {
  const { dispatch } = useAuthContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<[]>([]);

  const navigate = useNavigate();

  const login = async (body: any) => {
    setIsLoading(true);
    const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setIsLoading(false);
    if (!response.ok) {
      setErrors(data.errors);
      return Alert({ title: 'Failed', text: 'Something went wrong', icon: 'error' });
    }
    dispatch({ type: 'LOGIN', payload: data.data.user });
    localStorage.setItem('user', JSON.stringify(data.data.user));
    Alert({ title: 'Success', text: data.message, icon: 'success' });
    navigate('/');
  };

  return { login, isLoading, errors };
};

export default useLogin;
