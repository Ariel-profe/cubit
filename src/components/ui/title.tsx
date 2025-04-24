import clsx from "clsx";
import { titleFont } from "@/config/fonts";

interface Props {
    title: string;
    subtitle?: string;
    className?: string;
};

export const Title = ({title, subtitle, className}: Props) => {
  return (
    <div className={clsx(
        "mt-10 xl:mt-20",
        className
    )}>
        <h1 className={`${titleFont.className} antialiased text-white font-semibold mt-5`}>
            {title}
        </h1>

        {
            subtitle && (
                <h3 className="text-lg mb-5 font-normal text-slate-400">{subtitle}</h3>
            )
        }
    </div>
  )
}
