import { logOut } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

export default function LogOut() {
  const navigate = useNavigate();
  // function onComponentLoaded() {
  //   logOut();
  //   navigate('/');
  // }

  // useEffect(onComponentLoaded, []);
  useEffect(() => {
    logOut();
    navigate('/');
  }, []);
  return <></>;
}
