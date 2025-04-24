"use client";

import Link from "next/link";
import clsx from "clsx";
import { IoCloseOutline, IoCubeOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoTicketOutline } from "react-icons/io5";
import { useUIStore } from "@/store";

export const Sidebar = () => {

    const { isSideMenuOpen, closeSideMenu } = useUIStore(state => state);

  return (
    <div>
        {/* Background black */}
        {
            isSideMenuOpen && (
                <div className="fixed top-0 left-0 bg-black opacity-30 w-screen h-screen z-10" />
            )
        }

        {/* Background blur */}
        {
            isSideMenuOpen && (
                <div className="fadeIn fixed top-0 left-0 w-screen h-screen z-10 backdrop-blur-sm" onClick={closeSideMenu} />
            )
        }

        {/* Sidebar content */}
        <nav className={
            clsx(
                "fixed p-5 right-0 top-0 w-[400px] h-screen bg-slate-950 z-20 transform transition-all duration-300",
                {
                    "translate-x-full": !isSideMenuOpen
                }
            )
        }>

            <IoCloseOutline 
                size={40} 
                className="absolute top-5 right-5 cursor-pointer hover:bg-background rounded-full md:hover:text-red-700 md:hover:scale-90 transition-all" 
                onClick={closeSideMenu}
            />

            {/* Input Search */}
            <div className="relative mt-14">
                <IoSearchOutline size={20} className="absolute top-2 left-2" />
                <input 
                    type="text" 
                    placeholder="Buscar..." 
                    className="w-full bg-background rounded pl-10 py-1 border-b-2 text-xl border-gray-700 focus:outline-none focus:border-secondary"
                />
            </div>

            {/* Links */}

            <Link
                href="/nosotros"
                onClick={(closeSideMenu)}
                className="flex items-center mt-5 p-2 hover:bg-background rounded transition-all sm:hidden"
            >
                <IoCubeOutline size={20}/>
                <span className="ml-3 text-base tracking-wide">Nosotros</span>
            </Link>

            <Link
                href="/products"
                onClick={(closeSideMenu)}
                className="flex items-center mt-5 p-2 hover:bg-background rounded transition-all sm:hidden"
            >
                <IoCubeOutline size={20}/>
                <span className="ml-3 text-base tracking-wide">Productos</span>
            </Link>

            <Link
                href="/servicios"
                onClick={(closeSideMenu)}
                className="flex items-center mt-5 p-2 hover:bg-background rounded transition-all sm:hidden"
            >
                <IoPersonOutline size={20}/>
                <span className="ml-3 text-base tracking-wide">Servicios</span>
            </Link>

            {/* Divider */}
            <div className="w-full h-px bg-slate-600 my-2" />

            {/* User links */}

            <Link
                href="/"
                onClick={(closeSideMenu)}
                className="flex items-center mt-5 p-2 hover:bg-background rounded transition-all"
            >
                <IoPersonOutline size={20}/>
                <span className="ml-3 text-base tracking-wide">Perfil</span>
            </Link>
            <Link
                href="/"
                onClick={(closeSideMenu)}
                className="flex items-center mt-5 p-2 hover:bg-background rounded transition-all"
            >
                <IoTicketOutline size={20}/>
                <span className="ml-3 text-base tracking-wide">Ordenes</span>
            </Link>
            <Link
                href="/auth/login"
                onClick={(closeSideMenu)}
                className="flex items-center mt-5 p-2 hover:bg-background rounded transition-all"
            >
                <IoLogInOutline size={20}/>
                <span className="ml-3 text-base tracking-wide">Ingresar</span>
            </Link>
            <Link
                href="/"
                onClick={(closeSideMenu)}
                className="flex items-center mt-5 p-2 hover:bg-background rounded transition-all"
            >
                <IoLogOutOutline size={20}/>
                <span className="ml-3 text-base text-red-700 tracking-wide">Salir</span>
            </Link>

            {/* Divider */}
            <div className="w-full h-px bg-slate-600 my-2" />

            {/* Admin links */}

            <Link
                href="/"
                onClick={(closeSideMenu)}
                className="flex items-center mt-5 p-2 hover:bg-background rounded transition-all"
            >
                <IoCubeOutline size={20}/>
                <span className="ml-3 text-base tracking-wide">Productos</span>
            </Link>

            <Link
                href="/"
                onClick={(closeSideMenu)}
                className="flex items-center mt-5 p-2 hover:bg-background rounded transition-all"
            >
                <IoPeopleOutline size={20}/>
                <span className="ml-3 text-base tracking-wide">Usuarios</span>
            </Link>


            <Link
                href="/"
                onClick={(closeSideMenu)}
                className="flex items-center mt-5 p-2 hover:bg-background rounded transition-all"
            >
                <IoTicketOutline size={20}/>
                <span className="ml-3 text-base tracking-wide">Ordenes</span>
            </Link>
        </nav>
    </div>
  )
}
