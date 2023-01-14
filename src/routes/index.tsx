import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Invitation, Login, Register } from '../pages';
import { BaseLayout, GuestLayout, InvitationLayout } from '../layouts';
import useAuthContext from '../hooks/useAuthContext';

const Router = () => {
  const { user } = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/" element={!user ? <GuestLayout /> : <Navigate to="/" />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/" element={<InvitationLayout />}>
        <Route path="/:username" element={<Invitation />} />
      </Route>
    </Routes>
  );
};

export default Router;
