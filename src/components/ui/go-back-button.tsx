import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
    text: string;
    href: string;
    icon: IconType;
};

export const GoBackButton = ({href, text, icon: Icon}: Props) => {
    
    return (
        <div className="flex items-center gap-x-1 hover:gap-x-2 text-slate-400 transition-all">
            <Icon size={20} />
            <Link
                href={href}
                className="hover:underline underline-offset-2 transition-all"
            >{text}</Link>
        </div>
    )
}
