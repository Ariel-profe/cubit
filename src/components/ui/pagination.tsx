"use client";

import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import clsx from "clsx";
import { generatePaginationNumbers } from "@/utils/common/generatePaginationNumbers";

interface Props {
    totalPages: number;
};

export const Pagination = ({ totalPages }: Props) => {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    const pageString = searchParams.get("page") ?? 1;

    const currentPage = isNaN(+pageString) ? 1 : +pageString;

    if(currentPage < 1 || isNaN(+pageString)) {
        redirect(pathname);
    };

    const allPages = generatePaginationNumbers(currentPage, totalPages);

    const createPageUrl = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);

        if (pageNumber === "...") {
            return `${pathname}?${params.toString()}`;
        };

        if (+pageNumber <= 0) {
            return `${pathname}`;
        };

        if (+pageNumber > totalPages) { //Click en Next
            return `${pathname}?${params.toString()}`;
        };

        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    return (
        <div className="flex justify-center mt-10 mb-32 items-center">
            <nav aria-label="Page navigation example">
                <ul className="flex items-center justify-center gap-0.5 list-style-none">
                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-1 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
                            href={createPageUrl(currentPage - 1)}
                        >
                            <IoChevronBackOutline size={30} />
                        </Link>
                    </li>

                    {
                        allPages.map( (page, index) => (
                            <li key={page + "-" + index} className="page-item">
                                <Link
                                    className={
                                        clsx(
                                            "page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded text-gray-500 hover:bg-gray-800 focus:shadow-none",
                                            {
                                                "bg-secondary shadow-sm text-white hover:text-white hover:bg-secondary/60": currentPage === page,
                                            }
                                        )
                                    }
                                    href={createPageUrl(page)}
                                >
                                    {page}
                                </Link>
                            </li>

                        ))
                    }
                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-1 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500  hover:bg-slate-800 focus:shadow-none"
                            href={createPageUrl(currentPage + 1)}
                        >
                            <IoChevronForwardOutline size={30} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
