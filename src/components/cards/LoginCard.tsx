import { LockIcon } from '../../assets/icons/Icon';
import { LongArrowRightIcon } from '../../assets/icons/Icon';
import wismakalla from '../../assets/img/logo/wisma-kalla.jpg';

const LoginCard = () => {
  const handleLoginEss = () => {
    window.location.href = 'http://localhost:8000/auth/ess';
  };

  return (
    <div className="flex flex-wrap content-center justify-center w-full min-h-screen py-8 rounded-l-xl bg-slate-200">
      {/* {loginError && <ErrorAlert title={errorTitle} text={errorMessage} />} */}

      <div className="flex shadow-md">
        {/* <!-- Login form --> */}
        <div className="flex flex-wrap content-center justify-center w-full px-5 py-6 bg-white md:rounded-l-xl rounded-xl md:py-0 md:px-0">
          <div className="items-center content-center justify-center w-80">
            <div className="flex justify-center">
              <LockIcon className="w-12 h-12 opacity-80" />
            </div>
            {/* <!-- Heading --> */}
            <h1 className="flex justify-center pt-8 text-xl font-semibold text-pureBlack">
              Sign In
            </h1>
            <h2 className="flex justify-center pt-2 text-md">Welcome back,</h2>
            <h3 className="flex justify-center text-md pt-[1px]">
              Please sign in with your ESS account
            </h3>

            {/* <!-- Form --> */}

            <div className="mt-4 mb-3 px-9">
              <button
                className="flex mb-1.5 w-full justify-center text-center text-base text-white bg-primary hover:bg-green-900 px-2 py-3 rounded-md "
                onClick={handleLoginEss}
              >
                SIGN IN WITH ESS
                <div className="pl-9">
                  <LongArrowRightIcon className="w-5 h-6 " />
                </div>
              </button>
            </div>
            {/* <!-- Footer --> */}
            <div className="pt-1 text-center">
              <a
                href="#"
                className="text-sm font-semibold text-blue-500 hover:text-black "
              >
                Forgot Password?
              </a>
            </div>
            <div>
              <footer className="flex justify-center pt-10 text-center">
                <div className="flex text-sm">@ HCIS Intern 2023</div>
              </footer>
            </div>
          </div>
        </div>

        <div className="md:flex hidden flex-wrap content-center justify-center rounded-r-md w-[390px] h-[400px]">
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
