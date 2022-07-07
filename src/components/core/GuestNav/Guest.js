import { Link } from 'react-router-dom';

export default function GuestNav() {
  return (
    <>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
}
