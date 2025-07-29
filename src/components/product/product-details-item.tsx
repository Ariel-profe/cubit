import { IoCheckmarkCircleOutline } from "react-icons/io5";

interface Props {
    title: string;
    value: string | number;
}

export const ProductDetailsItem = ({ title, value }: Props) => {
    return (
        <li className="flex items-center gap-x-1 mb-1 capitalize text-sm md:text-base">
           <IoCheckmarkCircleOutline className="text-emerald-500" />
            <p className="font-semibold">{title}: <span className="font-light">{value}</span> </p> 
        </li>
    )
}
