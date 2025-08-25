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
        "my-2",
        className
    )}>
        <h1 className={`${titleFont.className} antialiased bg-gradient-to-br from-secondary to-quaternary bg-clip-text text-transparent text-4xl md:text-5xl xl:text-6xl font-bold leading-tight`}>
            {title}
        </h1>
        {
            subtitle && (
                <h3 className="text-lg md:text-xl xl:text-2xl mb-5 font-normal text-slate-400">{subtitle}</h3>
            )
        }
    </div>
  )
}
