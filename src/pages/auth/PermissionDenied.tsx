// Import Library & Package
import { NavLink } from 'react-router-dom';

// Import Assets
import ForbideenImage from '../../assets/img/error/ForbiddenImage.svg';

const PermissionDenied = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-x-8 space-y-16 lg:flex-row lg:space-y-0 2xl:space-x-0">
      <div className="flex flex-col items-center justify-center w-full ml-40 text-center lg:w-2/4 lg:px-2 xl:px-5">
        <p className="text-6xl font-bold tracking-wider text-black text-gray-300 md:text-8xl lg:text-7xl">
          403
        </p>
        <p className="mt-2 text-3xl font-bold tracking-wider text-black text-gray-300 md:text-5xl lg:text-4xl">
          Forbidden
        </p>
        <p className="my-12 text-lg text-black text-gray-500 md:text-xl lg:text-2xl">
          You Don't Have permission To Access This Page!
        </p>
        <li
          className="flex items-center py-2 space-x-2 text-gray-100 transition duration-150 rounded bg-primary hover:bg-green-700 px-11"
          title="Return Home"
        >
          <NavLink to={'/'}>
            <span className="text-2xl text-white">Return Home</span>
          </NavLink>
        </li>
      </div>
      <div className="flex justify-center w-2/3 p-4 lg:h-full lg:items-center">
        <img className="w-10/12 " alt="Image Forbideen" src={ForbideenImage} />
      </div>
    </div>
  );
};

export default PermissionDenied;
