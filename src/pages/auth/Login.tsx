// Import Library & Package
import { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';

//Import Components
import LoginButton from '../../components/buttons/LoginButton';
import InputField from '../../components/field/InputField';

//Import Assets
import LoginImg from '../../assets/img/logo/login-img.webp';
import { OpenEyeIcon, CloseEyeIcon } from '../../assets/icons/Icon';

const Login = () => {
  const [passwordInput, setPasswordInput] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPasswordInput(event.target.value);
  };

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex items-center max-w-4xl px-3 py-5 mb-10 bg-gray-100 shadow-lg md:px-5 md:pb-10 md:mb-10 rounded-2xl">
          <div className="px-3 md:px-8 md:w-1/2 ">
            <h2 className="text-2xl font-bold text-black">Login</h2>

            <form action="" className="flex flex-col gap-4">
              <InputField
                id="username"
                name="email"
                placeholder="Email"
                autoComplete="email"
                value={email}
                type="email"
                onChange={handleEmailChange}
                required={true}
                className="p-2 mt-8 text-sm border rounded-md"
              />

              <div className="relative">
                <InputField
                  className="w-full p-2 text-sm border rounded-md"
                  type={isPasswordVisible ? 'text' : 'password'}
                  onChange={handlePasswordChange}
                  value={passwordInput}
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required={true}
                />
                {isPasswordVisible ? (
                  <CloseEyeIcon
                    onClick={togglePassword}
                    className="absolute text-black -translate-y-1/2 cursor-pointer bi bi-eye top-1/2 right-3"
                  />
                ) : (
                  <OpenEyeIcon
                    onClick={togglePassword}
                    className="absolute text-black -translate-y-1/2 cursor-pointer bi bi-eye top-1/2 right-3"
                  />
                )}
              </div>
              <div className="text-xs text-link hover:text-black m text-start">
                <Link to="/forget-pass">Forgot your password?</Link>
              </div>
              <LoginButton email={email} passwordInput={passwordInput} />
            </form>
          </div>

          <div className="hidden w-2/3 sm:block">
            <img
              className="w-full"
              src={LoginImg}
              width="500"
              height="300"
              alt="Image Login"
              loading="eager"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
