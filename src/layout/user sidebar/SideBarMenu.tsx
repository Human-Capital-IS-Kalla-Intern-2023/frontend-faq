// Library & Package Import
import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';

import { DropdownSidebarMenuIcon } from '../../assets/icons/icon';

const SideBarMenu = ({ data }: any) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <ul>
        <li
          className={`link flex items-center ${pathname.includes(data.name)}`}
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          {data.icon}
          <p className="flex-1 ml-2 capitalize">{data.name}</p>

          <DropdownSidebarMenuIcon
            className={` ${subMenuOpen && 'rotate-180'} duration-200  `}
          />
        </li>
      </ul>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: 'fit-content',
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col pl-8 bg-white rounded-sm text-[0.8rem] font-normal overflow-hidden"
      >
        {data.menus?.map((menu: any) => (
          <li key={menu} className="flex items-center text-[15px] ">
            <NavLink
              to={`/${data.name}/${menu}`}
              className="w-full py-2 my-1 text-sm text-black capitalize duration-300 rounded-md link hover:bg-slate-300 hover:text-pureBlack "
            >
              {menu}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SideBarMenu;
