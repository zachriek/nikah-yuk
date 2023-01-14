import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRegister from '../../hooks/useRegister';
import { Loading } from '../../components';

interface FormDataProps {
  name: string;
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const { register, isLoading, errors } = useRegister();

  const [formData, setFormData] = useState<FormDataProps>({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [formError, setFormError] = useState<any>({
    name: {},
    username: {},
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
    await register(formData);
  };

  useEffect(() => {
    const nameError = errors.find((error: any) => error.param === 'name');
    const usernameError = errors.find((error: any) => error.param === 'username');
    const emailError = errors.find((error: any) => error.param === 'email');
    const passwordError = errors.find((error: any) => error.param === 'password');

    setFormError(() => {
      return {
        name: nameError,
        username: usernameError,
        email: emailError,
        password: passwordError,
      };
    });
  }, [errors]);

  return (
    <div className="w-full mx-auto md:w-1/2 lg:w-1/3 px-6 py-12 border bg-white border-zinc-400 shadow-xl">
      <h2 className="heading text-center mb-3">Daftar</h2>
      <p className="text mb-8">Selamat Datang!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nama Lengkap</label>
          <input
            type="name"
            className={`${formError.name && 'border-red-500 focus:ring-red-700'} form-input w-full focus:ring-zinc-900`}
            id="name"
            name="name"
            placeholder="Nama Lengkap"
            value={formData.name}
            onChange={handleChange}
          />
          <p className="invalid-message">{formError.name && formError.name.msg}</p>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            className={`${formError.username && 'border-red-500 focus:ring-red-700'} form-input w-full focus:ring-zinc-900`}
            id="username"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <p className="invalid-message">{formError.username && formError.username.msg}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={`${formError.email && 'border-red-500 focus:ring-red-700'} form-input w-full focus:ring-zinc-900`}
            id="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
          />
          <p className="invalid-message">{formError.password && formError.password.msg}</p>
        </div>
        <button type="submit" className="w-full btn btn-primary mb-2">
          {isLoading ? <Loading /> : 'Daftar'}
        </button>
        <div className="flex justify-center">
          <Link to="/login" className="btn btn-link">
            Sudah punya akun? Masuk disini
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
