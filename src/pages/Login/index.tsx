import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../../components';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const { login, isLoading, errors } = useLogin();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formError, setFormError] = useState<any>({
    email: {},
    password: {},
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(formData);
  };

  useEffect(() => {
    const emailError = errors.find((error: any) => error.param === 'email');
    const passwordError = errors.find((error: any) => error.param === 'password');

    setFormError(() => {
      return {
        email: emailError,
        password: passwordError,
      };
    });
  }, [errors]);

  return (
    <div className="w-full mx-auto md:w-1/2 lg:w-1/3 px-6 py-12 border bg-white border-zinc-400 shadow-xl">
      <h2 className="heading text-center">Masuk</h2>
      <p className="text">Selamat Datang!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={`${formError.email && 'border-red-500 focus:ring-red-700'} form-input w-full focus:ring-zinc-900`}
            id="email"
            name="email"
            placeholder="example@gmail.com"
            onChange={handleChange}
            value={formData.email}
          />
          <p className="invalid-message">{formError.email && formError.email.msg}</p>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={`${formError.password && 'border-red-500 focus:ring-red-700'} form-input w-full focus:ring-zinc-900`}
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
          <p className="invalid-message">{formError.password && formError.password.msg}</p>
        </div>
        <button type="submit" className="w-full flex justify-center items-center btn btn-primary mb-2">
          {isLoading ? <Loading /> : 'Masuk'}
        </button>
        <div className="flex justify-center">
          <Link to="/register" className="btn btn-link">
            Belum punya akun? Daftar disini
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
