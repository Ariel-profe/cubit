import { IoCheckmarkCircleOutline } from "react-icons/io5";

interface Props {
    title: string;
    value: string | number | boolean | string[];
};

export const ProductDetailsItem = ({ title, value }: Props) => {    
    return (
        <li className="flex items-center gap-x-1 mb-1 capitalize text-sm ">
           <IoCheckmarkCircleOutline className="text-emerald-500" size={20} />
            <p className="font-semibold">{title}: 
                {Array.isArray(value) 
                    ? value.map(item => (
                        <span key={item.toString()} className="font-light ml-1">
                            {item} 
                            {" "} {value.indexOf(item) !== value.length - 1 && '-'}{" "}
                        </span>
                    )) 
                    : (
                        <span className="font-light ml-1">{value}</span>
                    )}
            </p>
        </li>
    )
}
