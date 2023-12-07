import { Link } from 'react-router-dom';
import { LockIcon } from '../../assets/icons/Icon';
import { RightArrowIcon } from '../../assets/icons/Icon';
import wismakalla from '../../assets/img/logo/wisma-kalla.jpg';
const LoginCard = () => {
  return (
    <div className="flex flex-wrap w-full min-h-screen content-center justify-center rounded-l-xl bg-slate-200 py-8">
      <div className="flex shadow-md">
        {/* <!-- Login form --> */}
        <div className="flex flex-wrap content-center justify-center rounded-l-xl bg-white w-full">
          <div className=" w-72 content-center items-center justify-center">
            <div className="flex justify-center">
              <LockIcon className="h-12 w-12" />
            </div>
            {/* <!-- Heading --> */}
            <h1 className="flex justify-center text-xl pt-8 font-semibold">
              Sign In
            </h1>
            <h2 className="flex justify-center text-md pt-2">Welcome back,</h2>
            <h3 className="flex justify-center text-sm pt-[1px]">
              Please sign in with your ESS account
            </h3>

            {/* <!-- Form --> */}

            <div className="mt-4 mb-3 px-5">
              <button className="flex mb-1.5 w-full justify-center text-center text-base text-white bg-primary hover:bg-green-900 px-2 py-3 rounded-md">
                SIGN IN WITH ESS
                <div className="pl-9">
                  <RightArrowIcon className=" h-6 w-6" />
                </div>
              </button>
            </div>
            {/* <!-- Footer --> */}
            <div className="text-center">
              <a href="#" className="text-sm font-semibold text-pureBlack">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap content-center justify-center rounded-r-md w-[380px] h-[400px]">
          <img
            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
            src={wismakalla}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
