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
        <h1 className={`${titleFont.className} antialiased text-tertiary text-3xl lg:text-4xl font-semibold capitalize`}>
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
