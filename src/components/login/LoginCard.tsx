import { Link } from 'react-router-dom';
import { LockIcon } from '../../assets/icons/Icon';
import { LongArrowRightIcon } from '../../assets/icons/Icon';
import wismakalla from '../../assets/img/logo/wisma-kalla.jpg';
const LoginCard = () => {
  return (
    <div className="flex flex-wrap w-full min-h-screen content-center justify-center rounded-l-xl bg-slate-200 py-8">
      <div className="flex shadow-md">
        {/* <!-- Login form --> */}
        <div className="flex flex-wrap content-center justify-center rounded-l-xl bg-white w-full">
          <div className=" w-80 content-center items-center justify-center">
            <div className="flex justify-center">
              <LockIcon className="h-12 w-12 opacity-80" />
            </div>
            {/* <!-- Heading --> */}
            <h1 className="flex justify-center text-xl pt-8 font-semibold text-pureBlack">
              Sign In
            </h1>
            <h2 className="flex justify-center text-md pt-2">Welcome back,</h2>
            <h3 className="flex justify-center text-md pt-[1px]">
              Please sign in with your ESS account
            </h3>

            {/* <!-- Form --> */}

            <div className="mt-4 mb-3 px-9">
              <Link
                className="flex mb-1.5 w-full justify-center text-center text-base text-white bg-primary hover:bg-green-900 px-2 py-3 rounded-md"
                to={'/'}
              >
                SIGN IN WITH ESS
                <div className="pl-9">
                  <LongArrowRightIcon className=" h-6 w-5" />
                </div>
              </Link>
            </div>
            {/* <!-- Footer --> */}
            <div className="text-center pt-1">
              <a href="#" className="text-sm font-semibold text-pureBlack">
                Forgot Password?
              </a>
            </div>
            <div>
              <footer className="flex pt-10 justify-center text-center">
                <div className="flex text-sm">@ HCIS Intern 2023</div>
              </footer>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap content-center justify-center rounded-r-md w-[390px] h-[400px]">
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
