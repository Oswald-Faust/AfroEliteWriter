import React from "react";
import { motion } from "framer-motion";
import { IoIosGlobe, IoMdSearch, IoMdPerson, IoMdClock } from "react-icons/io";
import Head from "next/head";
import Link from "next/link";

function Header() {
  const [active, setActive] = React.useState(0);
  return (
    <div className=" absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
      <Head>
        <title>AfroElite Writer | La plateforme des rédacteurs web francophone</title>
      </Head>
      <div className="flex items-center gap-2 font-medium tracking-[4px]">
        <IoIosGlobe className=" text-xl" />
        AFROELITE WRITER
      </div>
      <ul className=" flex flex-wrap items-center gap-3 text-[11px] md:gap-10">
        {menus.map((menu, index) => {
          return (
            <motion.li
              layout
              key={index}
              className={` ${
                active == index && " border-b-2 border-b-yellow-500"
              } inline-block cursor-pointer  border-b-yellow-500 transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
            >
               <Link href={menu.href}>
            {menu.name}
          </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

export default Header;

const menus = [
  {name: 'Accueil', href: '/'},
  {name: 'Nos forfaits', href: '/forfaits'},
  {name: 'A propos de nous', href: '/about'}, 
  {name: 'Connexion', href: '/login'},
  {name: 'Inscription', href: '/register'}
]

