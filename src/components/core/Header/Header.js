import './Header.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../firebase';
import GuestNav from '../GuestNav/Guest';
import UserNav from '../UserNav/UserNav';




export default function Header() {
  const currentUser = useAuth();
  let nav;
  if (!currentUser) {
    nav = <GuestNav />;
  } else {
    nav = <UserNav/>;
  }
  return (
    <header>
      <nav>
        <h1>Car Shop</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          {nav}
            {/* <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li> */}
            
        </ul>
      </nav>
    </header>
  );
}
