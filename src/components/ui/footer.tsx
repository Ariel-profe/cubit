import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa6";

import { footerLinks } from "@/utils/common/links";

export const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="relative my-5 px-2 w-full">
            <hr className="h-0.5 text-slate-800 max-w-[1600px] mx-auto" />
            <div className="container mx-auto pt-5">
                <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-2">
                    <img className="h-10" src="/imgs/common/logo.webp" />

                    <div className="w-full">
                        <ul className="grid justify-between grid-cols-3 gap-4 w-full" >
                            {
                                footerLinks.map(item => (
                                    <div key={item.title}>
                                        <h5 className="block mb-1 text-base font-semibold text-quaternary">{item.title}</h5>
                                        {
                                            item.links.map(i => (
                                                <li key={i.id}>
                                                    <Link href={i.href} className="block text-slate-500 py-1 hover:text-slate-300 focus:text-slate-500 text-sm transition capitalize">
                                                        {i.title}
                                                    </Link>
                                                </li>

                                            ))
                                        }

                                    </div>
                                ))
                            }
                            </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full py-4 mt-12 md:flex-row md:justify-between">
                    <p className="block mb-4 text-sm text-center text-slate-400 md:mb-0">
                        Copyright © {year} {" "}
                        <a href="https://amn.com.ar" target="_blank" className="underline text-quaternary hover:text-quaternary/80 transition-colors">AMN Consultora Informática</a>. <br className="sm:hidden" /> Todos los derechos reservados.
                    </p>

                    {/* Social links */}
                    <div className="flex gap-4 text-slate-400 sm:justify-center">
                        <a href="#" className="block transition-opacity text-inherit hover:text-rose-400" target="_blank">
                           <FaInstagram size={20} />
                        </a>
                        <a href="#" className="block transition-opacity text-inherit hover:text-sky-500" target="_blank">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" className="block transition-opacity text-inherit hover:text-emerald-500" target="_blank">
                           <FaWhatsapp size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
