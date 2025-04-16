import { motion } from "motion/react";
import { useState } from "react";

export const CollapseCard = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < features.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="overflow-hidden py-12">
      <div className="mx-auto">
        <div className="mb-8 flex justify-between gap-4">
          <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl">
            Somos lo mejor. <span className="text-neutral-400">Aca esta el porque:</span>
          </h2>
          <div className="flex gap-2">
            <button
              className="h-fit bg-secondary p-4 text-2xl text-white transition-colors hover:bg-tertiary rounded"
              onClick={shiftLeft}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13 14L7 9.97L13 6z"/></svg>
            </button>
            <button
              className="h-fit bg-secondary p-4 text-2xl text-white transition-colors hover:bg-tertiary rounded"
              onClick={shiftRight}
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M9 17.192V6.808L17.154 12z"/></svg>
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          {features.map((feat, index) => (
            <Feature {...feat} key={index} position={position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  position: number;
  index: number;
  title: string;
  description: string;
  img: string;
}

const Feature = ({
  position,
  index,
  title,
  description,
  img,
}: FeatureProps) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden rounded-md p-8 shadow-lg md:w-3/5 ${
        index % 2 ? "bg-secondary text-white" : " bg-slate-900 border border-slate-700"
      }`}
    >
      <img className="absolute right-2 top-2 text-7xl opacity-20 text-black" />
      <h3 className="mb-8 text-3xl font-bold">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const features = [
  {
    title: "Ventas rapidas",
    img: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 15.577v-8.65l-2.33 2.33l-.708-.718L12 5l3.539 3.539l-.708.719L12.5 6.927v8.65zM6.616 19q-.691 0-1.153-.462T5 17.384v-2.423h1v2.423q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-2.423h1v2.423q0 .691-.462 1.153T17.384 19z"/></svg>,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt ipsum rerum natus fugit ex minima voluptas ratione quaerat. Ea!",
  },
  {
    title: "Calidad de atencion",
    img: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 20V7.75L5.75 13L5 12.34l6.5-6.5l6.5 6.5l-.75.66L12 7.75V20z"/></svg>,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, vitae sed? Maxime!",
  },
  {
    title: "Productos de ultima generacion",
    img: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"/><path stroke-linecap="round" d="M2 12h3m14 0h3M12 22v-3m0-14V2"/><path stroke-linecap="round" stroke-linejoin="round" d="M10 12h4m-2 2v-4"/></g></svg>,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ab perspiciatis earum quibusdam laudantium non nihil nesciunt?",
  },
  {
    title: "Fidelizacion de clientes",
    img: <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M9.5 11.5c.97 1.367 3.011 1.127 4.011 0l1.989-2c1.124-1.228 1.164-2.814 0-4c-1.136-1.157-2.864-1.157-4 0l-2 2"/><path d="M11.5 10.57c-.97-1.367-3-1.197-4-.07l-2 1.975c-1.124 1.228-1.164 2.839 0 4.025c1.136 1.157 2.864 1.157 4 0l2-2"/></g></svg>,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem explicabo nobis officia, nostrum eligendi accusamus unde ad cumque, magnam deleniti adipisci fugiat facere. Veniam?",
  },
  {
    title: "Servicio postventa",
    img: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.2 1c.59 0 1.18.08 1.76.23c.17.05.31.18.36.35s0 .36-.13.48l-3.15 3.15a.99.99 0 0 0-.24 1.02l.57 1.72c.1.3.33.53.63.63l1.72.57c.1.03.21.05.32.05c.26 0 .52-.1.71-.29l3.15-3.15a.5.5 0 0 1 .35-.15c.04 0 .09 0 .13.02c.17.05.31.18.35.35c.62 2.36-.02 4.79-1.73 6.5a6.7 6.7 0 0 1-4.76 1.97c-.54 0-1.08-.06-1.61-.19c-.13-.03-.25-.05-.38-.05c-.1 0-.2.01-.29.03c-.1.02-.23.07-.31.12s-.16.1-.22.17l-7.62 7.62c-.54.54-1.25.83-2.01.83s-1.48-.29-2.01-.83a2.843 2.843 0 0 1 0-4.02l7.62-7.62c.07-.07.12-.14.17-.22c.05-.09.1-.22.12-.31c.05-.21.04-.44-.02-.67a6.9 6.9 0 0 1-.07-2.89c.26-1.32.9-2.53 1.85-3.48A6.66 6.66 0 0 1 16.2.98m0-.98a7.69 7.69 0 0 0-7.57 6.25c-.21 1.1-.18 2.23.08 3.31c.02.1.02.17 0 .22c0 .02 0 .03-.01.04l-7.62 7.62a3.85 3.85 0 0 0 0 5.44C1.83 23.63 2.81 24 3.8 24s1.97-.37 2.72-1.12l7.62-7.62s.02 0 .04-.01h.08c.04 0 .09 0 .14.02c.6.15 1.22.22 1.84.22c1.98 0 3.96-.75 5.47-2.27c2.03-2.03 2.66-4.9 1.99-7.46c-.14-.52-.54-.93-1.06-1.06c-.13-.03-.26-.05-.39-.05c-.39 0-.78.15-1.06.44l-3.15 3.15l-1.72-.57l-.57-1.72L18.9 2.8a1.497 1.497 0 0 0-.68-2.51c-.66-.17-1.34-.26-2.01-.26z"/></svg>,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, saepe quo!",
  },
];