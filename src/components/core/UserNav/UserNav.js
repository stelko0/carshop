import { Link, Navigate, useNavigate } from 'react-router-dom';
import { logOut, useAuth } from '../../../firebase';

export default function UserNav() {
  const currentUser = useAuth();
  const navigate = useNavigate();
  <a onClick={handleLogout}>Log out</a>;
  function handleLogout() {
    logOut();
    navigate('/');
  }

  return (
    <>
      <li>
        <h2 id="user">{currentUser?.email}</h2>
      </li>
      <li>
        {/* <Link to="/logout">Logout</Link> */}
        <a onClick={handleLogout}>Log out</a>
      </li>
    </>
  );
}
