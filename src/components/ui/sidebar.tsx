"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react'
import { IoAnalyticsOutline, IoCloseOutline, IoCubeOutline, IoLogInOutline, IoLogOutOutline, IoPersonOutline, IoSearchOutline, IoTicketOutline } from "react-icons/io5";
import clsx from "clsx";

import { logout } from "@/actions";
import { useUIStore } from "@/store";

export const Sidebar = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const { isSideMenuOpen, closeSideMenu } = useUIStore(state => state);
    const { replace } = useRouter();

    const { data: session } = useSession();

    const isAuthenticated = !!session?.user;
    const isAdmin = (session?.user.role === "admin");

    const onSearchTerm = () => {
        if (searchTerm.trim().length === 0) return;
        replace(`/buscar/${searchTerm}`);
        setSearchTerm('');
        closeSideMenu();
    }

    const onLogout = async () => {
        await logout();
        window.location.reload();
        closeSideMenu();
    };

    const splitName = (fullName: string | undefined) => {
        return fullName?.split(" ")[0].toUpperCase();
    };

    const userName = splitName(session?.user.name)

    return (
        <div>
            {/* Background black */}
            {
                isSideMenuOpen && (
                    <div className="fixed top-0 left-0 bg-black opacity-40 w-screen h-screen z-20" />
                )
            }

            {/* Background blur */}
            {
                isSideMenuOpen && (
                    <div className="fadeIn fixed top-0 left-0 w-screen h-screen z-20 backdrop-blur-sm" onClick={closeSideMenu} />
                )
            }

            {/* Sidebar content */}
            <nav className={
                clsx(
                    "fixed p-8 right-0 top-0 w-[400px] h-screen bg-primary text-white z-20 transform transition-all duration-300",
                    {
                        "translate-x-full": !isSideMenuOpen
                    }
                )
            }>
                {userName && (<p>Hola <span className="text-tertiary">{userName}</span></p>)}

                <IoCloseOutline
                    size={30}
                    className="absolute top-2 right-5 cursor-pointer hover:bg-background/20 rounded-full md:hover:text-red-600 md:hover:scale-90 transition-all"
                    onClick={closeSideMenu}
                />

                {/* Input Search */}
                <div className="relative mt-14 text-slate-400 flex items-center py-2 px-1 bg-background/20 rounded">
                        <IoSearchOutline
                            size={20}
                            className="font-bold"
                            onClick={onSearchTerm}
                        />
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    onSearchTerm();
                                }
                            }}
                            className="ml-3 tracking-wider"
                        />
                </div>

                {
                    !isAuthenticated && (
                        <Link
                            href="/auth/login"
                            onClick={(closeSideMenu)}
                            className="flex items-center mt-4 py-2 px-1 hover:bg-background/20 rounded transition-all text-emerald-400"
                        >
                            <IoLogInOutline size={20} />
                            <span className="ml-3 text-base tracking-wide">Ingresar</span>
                        </Link>
                    )
                }

                {/* Links */}
                <Link
                    href="/nosotros"
                    onClick={(closeSideMenu)}
                    className="flex items-center mt-4 py-2 px-1 hover:bg-background/20 rounded transition-all sm:hidden"
                >
                    <IoCubeOutline size={20} />
                    <span className="ml-3 text-base tracking-wide">Nosotros</span>
                </Link>

                <Link
                    href="/productos"
                    onClick={(closeSideMenu)}
                    className="flex items-center mt-4 py-2 px-1 hover:bg-background/20 rounded transition-all sm:hidden"
                >
                    <IoCubeOutline size={20} />
                    <span className="ml-3 text-base tracking-wide">Productos</span>
                </Link>

                <Link
                    href="/servicios"
                    onClick={(closeSideMenu)}
                    className="flex items-center mt-4 py-2 px-1 hover:bg-background/20 rounded transition-all sm:hidden"
                >
                    <IoPersonOutline size={20} />
                    <span className="ml-3 text-base tracking-wide">Servicios</span>
                </Link>

                {
                    isAuthenticated && (
                        <>
                            {/* User links */}
                            <Link
                                href="/perfil"
                                onClick={(closeSideMenu)}
                                className="flex items-center mt-4 py-2 px-1 hover:bg-background/20 rounded transition-all"
                            >
                                <IoPersonOutline size={20} />
                                <span className="ml-3 text-base tracking-wide">Perfil</span>
                            </Link>
                            <Link
                                href="/ordenes"
                                onClick={(closeSideMenu)}
                                className="flex items-center mt-4 py-2 px-1 hover:bg-background/20 rounded transition-all"
                            >
                                <IoTicketOutline size={20} />
                                <span className="ml-3 text-base tracking-wide">Órdenes</span>
                            </Link>
                        </>
                    )
                }
                {
                    isAuthenticated && (
                        <button
                            onClick={() => {
                                closeSideMenu()
                                onLogout()
                            }}
                            className="flex w-full items-center mt-4 py-2 px-1 hover:bg-background/20 rounded transition-all cursor-pointer text-red-600"
                        >
                            <IoLogOutOutline size={20} />
                            <span className="ml-3 text-base tracking-wide">Salir</span>
                        </button>
                    )
                }

                {
                    isAdmin && (
                        <>
                            {/* Divider */}
                            <div className="w-full h-px bg-slate-500 my-1" />

                            {/* Admin links */}
                            <span className="text-xs text-slate-400">Administrador</span>

                            <Link
                                href="/admin"
                                onClick={(closeSideMenu)}
                                className="flex items-center py-2 hover:bg-background/20 rounded transition-all px-1"
                            >
                                <IoAnalyticsOutline size={20} />
                                <span className="ml-3 text-base tracking-wide">Panel administrativo</span>
                            </Link>
                        </>
                    )
                }
            </nav>
        </div>
    )
}
