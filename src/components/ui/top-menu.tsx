"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IoSearchOutline, IoCartOutline, IoDiceOutline, IoAccessibilityOutline, IoMegaphoneOutline } from "react-icons/io5";

import { useCartStore, useUIStore } from "@/store";
import { SearchInput } from "@/components";

export const TopMenu = () => {

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
    <nav
      className={
        `sticky top-0 w-full mx-auto p-2 z-20 
        ${scroll ? "bg-[#060329]" : "bg-transparent"} transition-all duration-200 ease-in`
      }
    >
      <div className="max-w-[1600px] mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/">
          <img src="/imgs/common/logo.webp" alt="cubit-logo" className="h-12" />
        </Link>

        {/* Center Menu */}
        <div className={`hidden ${!isSearchVisible ? "sm:flex lg:text-lg" : "sm:hidden"} fadeIn`}>
          <Link href="/nosotros" className="m-2 p-2 rounded-md transition-all sm:hover:text-tertiary flex items-center">
            <IoAccessibilityOutline className="inline-block mr-1" />
            Nosotros
          </Link>
          <Link href="/servicios" className="m-2 p-2 rounded-md transition-all sm:hover:text-tertiary flex items-center">
            <IoMegaphoneOutline className="inline-block mr-1" />
            Servicios
          </Link>
          <Link href="/productos" className="m-2 p-2 rounded-md transition-all sm:hover:text-tertiary flex items-center">
            <IoDiceOutline className="inline-block mr-1" />
            Productos
          </Link>
        </div>

        {/* Search */}
        <div className="flex items-center gap-x-2 p-1">
          {
            isSearchVisible ? (
              <SearchInput setIsSearchVisible={setIsSearchVisible} />
            ) : (
              <button
                className=" transition-all sm:hover:text-tertiary cursor-pointer"
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
            <div className="relative sm:hover:text-tertiary rounded-full p-2 transition-all">
              {
                (loaded && totalItemsInCart > 0) && (
                  <span className="absolute text-xs rounded-full px-1 font-bold -top-0.5 -right-0.5 bg-tertiary text-black fadeIn">
                    {totalItemsInCart}
                  </span>
                )
              }

              <IoCartOutline className="w-5 h-5" />
            </div>
          </Link>

          {/* Menu */}
          <button className="m-2 p-2 rounded-md transition-all sm:hover:bg-tertiary sm:hover:text-black cursor-pointer" onClick={openSideMenu}>
            Menú
          </button>

        </div>
      </div>
    </nav>
  )
}
