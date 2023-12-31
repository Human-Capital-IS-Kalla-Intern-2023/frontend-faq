// Library & Package Import
import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
// import logoKalla from '../../assets/img/logo/singel-logo-kalla.webp';
import { DropdownSidebarMenuIcon } from '../../assets/icons/Icon';
import IconRenderer from '../../helpers/IconRenders';

const UserSidebarMenu = ({ data }: any) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const TOPIC_STORAGE_URL = import.meta.env.VITE_TOPIC_STORAGE_URL;
  return (
    <>
      <ul>
        <li
          className={`hover:bg-[#E4E6E9] rounded-md px-3 py-2   hover:text-black ${
            pathname === `/faq/question/${data.slug}` ? 'bg-slate-200  ' : ' '
          }`}
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          <div className="flex items-center">
            <div>
              {data.image ? (
                <img
                  src={`${TOPIC_STORAGE_URL}/${data.image}`}
                  alt={`Logo ${data.name}`}
                  className="w-6 h-6"
                  loading="eager"
                />
              ) : (
                <IconRenderer value={data.icon} className="h-6 w-6" />
              )}
            </div>

            <div className="ml-2 flex-1 flex items-center">
              <NavLink
                to={`/faq/question/${data.slug}`}
                className={`capitalize text-[15px] ${pathname.includes(
                  data.name
                )}`}
              >
                {data.name}
              </NavLink>
              <DropdownSidebarMenuIcon
                className={`ml-auto ${
                  subMenuOpen && 'rotate-180'
                } duration-200 px-2 cursor-pointer`}
              />
            </div>
          </div>
        </li>
      </ul>
      <motion.ul
        animate={subMenuOpen ? { height: 'fit-content' } : { height: 0 }}
        className="flex flex-col pl-8 bg-white rounded-sm text-[0.8rem] font-normal overflow-hidden"
      >
        {data?.questions?.map((question: any) => (
          <li
            key={question.id}
            className={`flex items-center text-[14px] px-3} rounded-md ${
              pathname === `/faq/question/${data.slug}/${question.slug}`
                ? 'bg-slate-200  '
                : ' '
            }`}
          >
            <NavLink
              to={`/faq/question/${data.slug}/${question.slug}`}
              className="w-full py-2 px-1 my-[5px] text-[14px] text-black capitalize duration-300 rounded-md link hover:bg-[#E4E6E9] hover:text-black "
            >
              {question.question}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default UserSidebarMenu;
