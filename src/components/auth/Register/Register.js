import './Register.css';
import { Link } from 'react-router-dom';
import { register, useAuth } from '../../../firebase';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repPass = useRef();

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    if (passwordRef.current.value === repPass.current.value) {
      await register(emailRef.current.value, passwordRef.current.value);
    }
    setLoading(false);
    navigate('/');
  }

  return (
    <div id="registerContainer">
      <form id="register" action="#" onSubmit={handleRegister}>
        <h2>Register</h2>
        <label htmlFor="email">Email:</label>
        <input ref={emailRef} type="text" name="email" />
        <label htmlFor="pass">Password:</label>
        <input id="pass" ref={passwordRef} type="password" name="pass" />
        <label htmlFor="repass">Repeat Password:</label>
        <input id="rePass" ref={repPass} type="password" name="repass" />
        <p>You already have a registration?</p>
        <span>
          <Link to="/login">Login</Link>
        </span>
        <button disabled={loading || currentUser}>Register</button>
      </form>
    </div>
  );
}
