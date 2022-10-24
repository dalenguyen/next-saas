import { useEffect } from 'react';
import { useUser } from '../context/user';

const Logout = () => {
  const { logout } = useUser();
  useEffect(() => {
    logout()
  }, []);
  return <p>Login</p>;
};

export default Logout;
