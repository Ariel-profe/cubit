"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { useUIStore } from "@/store";

export const TopMenu = () => {

  const { openSideMenu } = useUIStore(state => state);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <nav
      className={`sticky top-0 w-full mx-auto flex justify-between items-center px-3 py-2 border-slate-700 z-10  ${scroll ? "backdrop-blur-sm border-b" : "backdrop-blur-none border-none"} transition-all duration-300 ease-in`}>
      {/* Logo */}
      <div>
        <Link href="/">
          <img src="/imgs/common/logo.webp" alt="cubit-logo" className="h-12" />
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link href="/about" className="m-2 p-2 rounded-md transition-all sm:hover:text-slate-100">Nosotros</Link>
        <Link href="/products" className="m-2 p-2 rounded-md transition-all sm:hover:text-slate-100">Productos</Link>
        <Link href="/services" className="m-2 p-2 rounded-md transition-all sm:hover:text-slate-100">Servicios</Link>
      </div>

      {/* Search,Cart, Menu */}
      <div className="flex items-center gap-x-2">
        <Link href="/search" className="sm:hover:bg-slate-800 rounded-full p-2 transition-all">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href="/cart">
          <div className="relative sm:hover:bg-slate-800 rounded-full p-2 transition-all" >
            <span className="absolute text-xs rounded-full px-1 font-bold top-0 right-0 bg-primary text-white">3</span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button className="m-2 p-2 rounded-md transition-all sm:hover:bg-slate-800 cursor-pointer" onClick={openSideMenu}>
          Menú
        </button>

      </div>

    </nav>
  )
}
