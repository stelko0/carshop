import './Login.css';
import { Link } from 'react-router-dom';
import { useAuth, login } from '../../../firebase';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    await login(emailRef.current.value, passwordRef.current.value);
    // useEffect(() => {
    //   navigate('/');
    // }, []);
    window.location.href = '/';
    navigate('/')
  }
  return (
    <div id="loginContainer">
      <form id="login" action="#" onSubmit={handleLogin}>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input ref={emailRef} type="text" name="email" required />
        <label htmlFor="pass">Password:</label>
        <input ref={passwordRef} type="password" name="pass" required />
        <p>You don't have a registration?</p>
        <span>
          <Link to="/register">Register</Link>
        </span>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
