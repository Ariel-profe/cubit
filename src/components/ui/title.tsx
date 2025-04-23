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
        "mt-3",
        className
    )}>
        <h1 className={`${titleFont.className} antialiased  font-semibold my-5`}>
            {title}
        </h1>

        {
            subtitle && (
                <h3 className="text-xl mb-5 font-normal">{subtitle}</h3>
            )
        }
    </div>
  )
}
