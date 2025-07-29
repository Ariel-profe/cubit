"use client";

import { Dispatch, SetStateAction, useState } from 'react'
import { useRouter } from 'next/navigation';
import { IoCloseOutline, IoSearchOutline } from 'react-icons/io5';

interface Props {
    setIsSearchVisible: Dispatch<SetStateAction<boolean>>;
}

export const SearchInput = ({ setIsSearchVisible }: Props) => {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const { push } = useRouter();

    const onSearchTerm = () => {
        if (searchTerm.trim().length === 0) return;
        push(`/buscar/${searchTerm}`);
    };

    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Buscar..."
                className="p-1.5 rounded bg-primary text-white w-64 fadeIn placeholder:text-slate-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onSearchTerm();
                    }
                }}
            />
            <IoCloseOutline
                size={23}
                className="absolute top-1.5 right-8 cursor-pointer hover:bg-background/20 rounded-full md:hover:text-red-600 md:hover:scale-90 transition-all"
                onClick={() => setIsSearchVisible(false)}
            />
            <IoSearchOutline
                size={23}
                className="absolute top-1.5 right-2 cursor-pointer hover:bg-background/20 rounded-full md:hover:text-quaternary md:hover:scale-90 transition-all"
                onClick={onSearchTerm}
            />
        </div>
    )
}
