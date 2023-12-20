import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginCard from '../../components/cards/LoginCard';
import Cookies from 'js-cookie';
const ESSLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('access_token');

    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <>
      <LoginCard />
    </>
  );
};

export default ESSLogin;
