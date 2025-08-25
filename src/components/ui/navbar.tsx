"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

import { useCartStore, useUIStore } from "@/store";
import { Button, SearchInput } from "@/components";

export const Navbar = () => {

  const { openSideMenu } = useUIStore(state => state);
  const totalItemsInCart = useCartStore(state => state.getTotalItems());

  const [loaded, setLoaded] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <nav className={`fixed flex items-center justify-between p-4 top-0 w-full mx-auto z-20 ${scroll ? "bg-background" : "bg-transparent"} transition-all duration-200 ease-in`}>
      <NavLeft />

      {/* Search */}
      <div className="flex items-center gap-x-2 p-1">
        {
          isSearchVisible ? (
            <SearchInput setIsSearchVisible={setIsSearchVisible} />
          ) : (
            <button
              className=" transition-all sm:hover:text-white cursor-pointer"
              onClick={() => setIsSearchVisible(true)}
            >
              <IoSearchOutline className="w-5 h-5" />
            </button>
          )
        }

        {/* Cart */}
        <Link href={
          ((totalItemsInCart === 0) && loaded)
            ? "/empty"
            : "/carrito"
        }>
          <div className="relative sm:hover:text-white rounded-full p-2 transition-all">
            {
              (loaded && totalItemsInCart > 0) && (
                <span className="absolute text-xs rounded-full px-1 font-bold -top-0.5 -right-0.5 bg-secondary text-white fadeIn">
                  {totalItemsInCart}
                </span>
              )
            }

            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <Button onClick={openSideMenu}>Menú</Button>
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <img src="/imgs/common/logo.webp" alt="cubit-logo" className="h-8" />
    </Link>
  );
};

const NavLeft = () => {
  return (
    <div className="flex items-center gap-6">
      <Logo />
      <NavLink text="Nosotros" href="/nosotros" />
      <NavLink text="Servicios" href="/servicios" />
      <NavLink text="Productos" href="/productos" />
      <NavLink text="Contacto" href="/contacto" />
    </div>
  );
};

const NavLink = ({ text, href }: { text: string, href: string }) => {
  return (
    <Link
      href={href}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-300">{text}</span>
        <span className="flex items-center h-[30px] text-white">
          {text}
        </span>
      </motion.div>
    </Link>
  );
};