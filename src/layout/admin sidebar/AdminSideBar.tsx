// Library & Package Import
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { NavLink, useLocation } from 'react-router-dom';
import { TokenHelperAdmin } from '../../helpers/TokenHelpers';
// Components Import
// import SideBarMenu from './SideBarMenu';
import ButtonLogout from '../../components/buttons/ButtonLogout';

// Assets Import
// import logoKalla from '../../assets/img/kalla-logo-full.webp';
import logo232 from '../../assets/img/logo/logo-232.webp';
import logo464 from '../../assets/img/logo/logo-464.webp';
import logo300 from '../../assets/img/logo/logo-300.webp';
import logo660 from '../../assets/img/logo/logo-660.webp';
import logo1280 from '../../assets/img/logo/logo-1280.webp';
import logo3000 from '../../assets/img/logo/logo-3000.webp';

import {
  DashboardIcon,
  FAQIcon,
  TopicIcon,
  CloseSidebarIcon,
  ReponsiveSidebarIcon,
} from '../../assets/icons/Icon';

const AdminSideBar = () => {
  const isTabletMid = useMediaQuery({ query: '(max-width: 1024px)' });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const { pathname } = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const textAnimation = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    }
  }, [pathname, isTabletMid]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: '3.2rem',
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <>
      <div className="shadow-xl">
        <div
          onClick={() => setOpen(false)}
          className={`lg:hidden fixed inset-0 max-h-full z-10 bg-black/50 ${
            open ? 'block' : 'hidden'
          } `}
        ></div>
        <motion.div
          ref={sidebarRef}
          variants={Nav_animation}
          initial={{ x: isTabletMid ? -250 : 0 }}
          animate={open ? 'open' : 'closed'}
          className="bg-white text-gray z-10 w-[22rem]  fixed h-full min-h-screen shadow-allSideLow max-h-screen "
        >
          <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300 mx-3">
            <img
              alt="Kalla Logo"
              src={logo232}
              srcSet={`
      ${logo232} 232w,
      ${logo300} 300w,
      ${logo464} 464w,
      ${logo660} 660w,
      ${logo1280} 1280w,
      ${logo3000} 3000w
    `}
              sizes="(min-width: 1060px) 223px, (min-width: 940px) calc(113vw - 957px), (min-width: 880px) calc(110vw - 933px), (min-width: 840px) calc(70vw - 584px), (min-width: 680px) 232px, (min-width: 640px) calc(995vw - 6335px), (min-width: 600px) calc(-135vw + 914px), (min-width: 500px) calc(-95vw + 682px), calc(-7.78vw + 255px)"
              width={232}
              height={96}
              loading="lazy"
            />
          </div>

          <div className="flex flex-col h-full">
            <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:h-[68%] h-[70%] rounded-md">
              <li
                className={`px-1 py-2 mb-1 rounded-md text-base   ${
                  pathname.includes('/admin/dashboard')
                    ? 'bg-primary text-white '
                    : 'hover:bg-slate-300'
                }`}
              >
                <NavLink to={'/admin/dashboard'} className="flex items-center">
                  <DashboardIcon className="min-w-max" />
                  <motion.span
                    variants={textAnimation}
                    animate={open ? 'open' : 'closed'}
                    className="ml-2 link"
                  >
                    Dashboard
                  </motion.span>
                </NavLink>
              </li>

              <li className="pt-4 pb-1 border-b border-slate-300 ">
                <p className="inline-block pl-3 mb-2 text-[17px] text-slate-500">
                  Other Section
                </p>
              </li>
              <li
                className={`px-1 py-2 mb-1 rounded-md text-base   ${
                  pathname.includes('/admin/faq')
                    ? 'bg-primary text-white '
                    : 'hover:bg-slate-300'
                }`}
              >
                <NavLink to={'/admin/faq'} className="flex items-center">
                  <FAQIcon className="min-w-max" />
                  <motion.span
                    variants={textAnimation}
                    animate={open ? 'open' : 'closed'}
                    className="ml-2 link"
                  >
                    FAQ
                  </motion.span>
                </NavLink>
              </li>
              <li
                className={`px-1 py-2 mb-1 rounded-md text-base  ${
                  pathname.includes('/admin/topic')
                    ? 'bg-primary text-white '
                    : 'hover:bg-slate-300 '
                }`}
              >
                <NavLink to={'/admin/topic'} className="flex items-center">
                  <TopicIcon className="min-w-max" />
                  <motion.span
                    variants={textAnimation}
                    animate={open ? 'open' : 'closed'}
                    className="ml-2 link"
                  >
                    Topic
                  </motion.span>
                </NavLink>
              </li>

              <li className="mt-5 border-t border-slate-300">
                <ButtonLogout
                  title="Logout"
                  bg="rounded-md"
                  className="flex items-center justify-center text-base "
                  linkNavigate="/auth/admin/login"
                  remove_token_name="admin_access_token"
                  token_helper={TokenHelperAdmin()}
                />
              </li>
            </ul>
          </div>
          <motion.div
            onClick={() => {
              setOpen(!open);
            }}
            animate={
              open
                ? {
                    x: 0,
                    y: 0,
                    rotate: 0,
                  }
                : {
                    x: -10,
                    y: -200,
                    rotate: 180,
                  }
            }
            transition={{ duration: 0 }}
            className="absolute z-50 hidden cursor-pointer w-fit h-fit md:block right-2 bottom-3"
          >
            <CloseSidebarIcon />
          </motion.div>
        </motion.div>
        <div
          className="absolute right-0 m-3 top-1 md:top-2 md:block lg:hidden"
          onClick={() => setOpen(true)}
        >
          <ReponsiveSidebarIcon />
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
