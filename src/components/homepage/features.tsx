"use client";
import Link from "next/link";

import clsx from "clsx";
import { IoCheckmark } from "react-icons/io5";
import { Tag } from "@/components";

const featuresTiers = [
  {
    title: "Accesorios",
    buttonText: "Descubrir",
    href: "/productos",
    popular: false,
    inverse: false,
    features: [
      "Auriculares",
      "Monitores",
      "Fundas",
      "Mouse",
      "y más...",
    ],
  },
  {
    title: "Notebooks",
    buttonText: "Descubrir",
    href: "/productos/notebooks",
    popular: true,
    inverse: true,
    features: [
      "Variedad de modelos",
      "Procesadores potentes",
      "Pantallas de alta resolución",
      "Almacenamiento SSD",
      "Teclados retroiluminados",
      "Duración de batería prolongada",
    ],
  },
  {
    title: "Marcas Premium",
    buttonText: "Descubrir",
    href: "/marcas",
    popular: false,
    inverse: false,
    features: [
      "Lenovo",
      "Dell",
      "HP",
      "Asus",
      "Samgung",
      "Logitech",
      "y más...",
    ],
  },
];

export const Features = () => {
  return (
    <section className="py-10 bg-slate-100 text-slate-800">
      <div className="container mx-auto px-3">
        <div className="section-heading">
          <h2 className="section-title"> Explorá lo que tenemos para vos </h2>
          <p className="section-description mt-5">
            Descubrí una amplia gama de productos de tecnología, desde
            accesorios hasta notebooks de marcas premium. ¡Encontrá lo que
            necesitás!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-center">
          {featuresTiers.map(
            ({
              title,
              href,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                key={title}
                className={clsx(
                  "card",
                  inverse === true && "border-primary bg-background text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={clsx(
                      "text-lg font-bold mb-2",
                      inverse === true && "text-slate-300"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                   <Tag title="Popular" />
                  )}
                </div>
                
                <Link
                  href={href}
                  className={clsx(
                      "border border-primary md:hover:bg-primary md:hover:text-white transition-colors p-2 rounded w-full mt-2",
                      inverse === true && "border-slate-400 md:hover:bg-transparent"
                    )}
                >
                  {buttonText}
                </Link>
                <ul className="flex flex-col gap-5 mt-4">
                  {features.map((feature) => (
                    <li className="text-sm flex items-center gap-4" key={feature}>
                      <IoCheckmark className={clsx(
                      "h-6 w-6 text-primary",
                      inverse === true && "text-slate-300"
                    )} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
