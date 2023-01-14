import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import useAuthContext from '../../hooks/useAuthContext';
import useLogout from '../../hooks/useLogout';
import Loading from '../Loading';

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout, isLoading } = useLogout();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="w-full py-4 fixed top-0 left-0 bg-white shadow">
      <div className="container flex justify-between items-center">
        <Link to="/" className="navbar-brand">
          NikahYuk
        </Link>
        <div className="hidden lg:flex gap-x-16">
          <ul className="flex justify-center items-center gap-x-4">
            {!user ? (
              <>
                <li>
                  <Link to="/login" className="btn btn-outline">
                    Masuk
                  </Link>
                </li>
                <li>
                  <Link to="/" className="btn btn-primary">
                    Daftar
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button className="btn btn-outline" onClick={handleLogout}>
                    {isLoading ? (
                      <Loading />
                    ) : (
                      <>
                        <BiLogOut />
                        <span className="mx-2">Keluar</span>
                      </>
                    )}
                  </button>
                </li>
                <li>
                  <Link to="/" className="btn btn-primary">
                    <AiOutlinePlus />
                    <span className="mx-2">Buat Undangan</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
