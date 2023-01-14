import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';

const BaseLayout = () => {
  return (
    <div className="bg-zinc-50">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
