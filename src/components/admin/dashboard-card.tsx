import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
    href: string;
    title: string;
    counter: number;
    icon: IconType;
};

export const DashboardCard = ({href, icon: Icon, title, counter}: Props) => {  

    return (
        <Link
            href={href}
            key={title}
            className="flex flex-col bg-primary text-white p-6 rounded shadow hover:shadow-lg transition-shadow capitalize hover:text-tertiary hover:bg-primary/80"
        >
            <span className="text-3xl font-bold mb-2 text-tertiary">
                {counter}
            </span>
            <div className="flex items-center gap-x-2">
                <Icon size={20} />
                {title}
            </div>
        </Link>
    )
}
