// Import Library & Package
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import ReactLoading from 'react-loading';

// Import Asset
import { LogoutIcon } from '../../assets/icons/Icon';

// Import API
import { logoutUser } from '../../api/admin/AuthAdminAPI';

const ButtonLogout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoading(true);

    const responseData = await logoutUser();

    if (responseData) {
      Cookies.remove('access_token');
      navigate(`/`);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Logout Failed',
        text: 'Something went wrong',
      });
      navigate(`/`);
    }

    setIsLoading(false);
  };

  const textAnimation = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      <div className="px-1 py-2 mt-3 mb-1 rounded-md hover:bg-primary hover:text-white">
        <button
          onClick={() => {
            Swal.fire({
              icon: 'warning',
              title: 'Confirm Logout',
              text: 'Are you sure you want to log out?',
              showCancelButton: true,
              confirmButtonText: 'Log Out',
              cancelButtonText: 'Cancel',
            }).then((result) => {
              if (result.isConfirmed) {
                handleLogout();
              }
            });
          }}
          aria-label="Log Out Function"
          className="link"
          role="link"
        >
          <div className="flex items-center text-base">
            <LogoutIcon className="min-w-max" />
            <motion.div variants={textAnimation} className="ml-2 link">
              Log Out
            </motion.div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ButtonLogout;
