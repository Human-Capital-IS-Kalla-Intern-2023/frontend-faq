// CallbackPage.js
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import ReactLoading from 'react-loading';

const Callback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    console.log(token);
    setIsLoading(true);
    if (token) {
      Cookies.set('access_token', token, { expires: 7 });
      setIsLoading(false);
      navigate('/home');
    } else {
      console.log('nah2');

      console.error('Token not found in query parameters');
      setIsLoading(false);
      navigate('/');
    }
  }, [location, navigate]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      <div>
        <div className="flex items-center justify-center h-screen text-2xl text-center">
          Login....
        </div>
      </div>
    </>
  );
};

export default Callback;
