import { Outlet } from 'react-router-dom';
import { NavbarBottom } from '../../components';

const InvitationLayout = () => {
  return (
    <>
      <NavbarBottom />
      <Outlet />
    </>
  );
};

export default InvitationLayout;
