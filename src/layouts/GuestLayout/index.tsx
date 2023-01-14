import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center py-10">
      <div className="container">
        <Outlet />
      </div>
    </section>
  );
};

export default GuestLayout;
