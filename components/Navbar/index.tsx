import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="w-full py-4 fixed top-0 left-0 bg-white shadow">
      <div className="container flex justify-between items-center">
        <Link href="/" className="navbar-brand">
          NikahYuk
        </Link>
        <div className="hidden lg:flex gap-x-16">
          <ul className="flex justify-center items-center gap-x-4">
            <li>
              <Link href="/" className="btn btn-primary">
                <AiOutlinePlus />
                <span className="ml-2">Buat Undangan</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
