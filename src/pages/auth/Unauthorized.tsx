// Import Library & Package
import { NavLink } from 'react-router-dom';

// Import Assets
import UnauthorizedImg from '../../assets/img/error/UnauthorizedImage.svg';

const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-x-8 space-y-16 lg:flex-row lg:space-y-0 2xl:space-x-0">
      <div className="flex justify-center w-2/5 p-4 lg:h-full lg:items-center">
        <img
          className="w-10/12 "
          alt="Image Unauthorized"
          src={UnauthorizedImg}
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full ml-40 text-center lg:w-2/4 lg:px-2 xl:px-5">
        <p className="text-6xl font-bold tracking-wider text-black text-gray-300 md:text-8xl lg:text-7xl">
          401
        </p>
        <p className="mt-2 text-3xl font-bold tracking-wider text-black text-gray-300 md:text-5xl lg:text-4xl">
          Unauthorized
        </p>
        <p className="my-12 text-lg text-black text-gray-500 md:text-xl lg:text-2xl">
          You must be logged in to access this page. Please sign in to continue.
        </p>
        <div
          className="flex items-center py-2 space-x-2 text-gray-100 transition duration-150 rounded-full bg-primary hover:bg-green-700 px-11"
          title="Return Home"
        >
          <NavLink to={'/'}>
            <span className="text-xl text-white">Return To Home</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
