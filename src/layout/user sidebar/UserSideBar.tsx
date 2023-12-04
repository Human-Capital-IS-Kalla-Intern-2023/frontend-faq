// Library & Package Import
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
// import ReactLoading from 'react-loading';

// Components Import
import SideBarMenu from './UserSidebarMenu';

// Assets Import
// import logoKalla from '../../assets/img/kalla-logo-full.webp';
import logo232 from '../../assets/img/logo/logo-232.webp';
import logo464 from '../../assets/img/logo/logo-464.webp';
import logo300 from '../../assets/img/logo/logo-300.webp';
import logo660 from '../../assets/img/logo/logo-660.webp';
import logo1280 from '../../assets/img/logo/logo-1280.webp';
import logo3000 from '../../assets/img/logo/logo-3000.webp';

import {
  CloseSidebarIcon,
  ReponsiveSidebarIcon,
} from '../../assets/icons/Icon';

// Import API
import { getUserSidebar } from '../../api/user/UserSidebarAPI';

const UserSidebar = () => {
  const isTabletMid = useMediaQuery({ query: '(max-width: 768px)' });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const { pathname } = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // const [isLoading, setIsLoading] = useState(false);
  const [listMenus, setListMenus] = useState<any | undefined>(undefined);

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
          width: '22rem',

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
          width: '22rem',
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

  const fetchListFaqByTopic = async () => {
    // setIsLoading(true);

    try {
      const responseData = await getUserSidebar();
      setListMenus(responseData.data);
    } catch (error: any) {
      console.error('Error fetch all topic user:', error);
    } finally {
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchListFaqByTopic();
  }, []);

  // const listMenus = [
  //   {
  //     name: 'Pengaturan Akun',
  //     icon: <TopicIcon className="min-w-max" />,
  //     menus: ['Lupa Password', 'Tidak dapat membuat akun'],
  //   },
  //   {
  //     name: 'ICT',
  //     icon: <TopicIcon className="min-w-max" />,
  //     menus: ['Lupa Password', 'Tidak dapat membuat akun'],
  //   },
  // ];

  return (
    <>
      {/* {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )} */}
      <div className="shadow-xl">
        <div
          onClick={() => setOpen(false)}
          className={`md:hidden fixed inset-0 max-h-full z-10 bg-black/50 ${
            open ? 'block' : 'hidden'
          } `}
        ></div>
        <motion.div
          ref={sidebarRef}
          variants={Nav_animation}
          initial={{ x: isTabletMid ? -250 : 0 }}
          animate={open ? 'open' : 'closed'}
          className="bg-white text-gray z-10 w-[22rem]  fixed h-full min-h-screen overflow-y-auto shadow-allSideLow max-h-screen "
        >
          <div className="flex items-center gap-2.5 font-medium justify-center  pt-3 mx-3">
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

          <div className="flex flex-col min-h-screen overflow-y-auto max-h-auto">
            <ul className="px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden  md:h-[68%] h-[70%] rounded-md">
              <li className=" border-slate-300">
                {(open || isTabletMid) && (
                  <div className="py-5 border-y border-slate-300 ">
                    {listMenus?.map((menu: any) => (
                      <div
                        key={menu.name}
                        className="flex flex-col text-black gap-1  mb-1  md:h-[68%] h-[70%] text-[17px] rounded-md "
                      >
                        <SideBarMenu data={menu} />
                      </div>
                    ))}
                  </div>
                )}
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
            className="z-50 hidden my-3 ml-auto mr-3 cursor-pointer w-fit h-fit md:block"
          >
            <CloseSidebarIcon />
          </motion.div>
        </motion.div>
        <div className="m-3 md:hidden" onClick={() => setOpen(true)}>
          <ReponsiveSidebarIcon />
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
