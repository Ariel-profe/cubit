import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyPage() {
  return (
    <div className="flex justify-center items-center h-[800px]">      
      <IoCartOutline size={80} className="mx-5" />

      <div className="flex flex-col items-center">
        <h1 className="text-xl font-light">Tu carrito está vacío</h1>

        <Link href="/" className="text-secondary mt-2 text-4xl underline">Regresar</Link>
      </div>
    </div>
  );
}