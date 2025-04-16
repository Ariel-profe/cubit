import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export const Features = () => {
  return (
    <div className="relative mx-auto grid h-full w-full grid-cols-1 gap-8 md:grid-cols-2">
      <Copy />
      <Carousel />
    </div>
  );
};

const Copy = () => {
  return (
    <div className="flex h-fit w-full flex-col justify-start py-12 md:sticky md:top-20 md:h-screen">
      <span className="w-fit rounded-md bg-tertiary px-4 py-2 text-sm uppercase text-indigo-100">
        Calidad asegurada
      </span>
      <h2 className="mb-4 mt-2 text-5xl font-medium leading-tight">
        Sabemos lo que necesitas, tenemos lo que querés.
      </h2>
      <p className="text-lg text-slate-400">
        Contamos con una gran variedad de calidades y precios de todos los insumos tecnológicos requeridos hoy en día. Nuestra atención es instantánea, resolvemos tus dudas lo antes posibles para que experiencia con nosotros sea la mejor que hayas tenido.
      </p>
    </div>
  );
};

const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="relative w-full">
      <Gradient />

      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={1}
          numItems={4}
          img="/src/assets/homepage/productos-tecnologicos.webp"
          title="Productos tecnológicos"
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={2}
          numItems={4}
          img=""
          title=""
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={3}
          numItems={4}
          img=""
          title=""
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={4}
          numItems={4}
          img=""
          title=""
        />
      </div>

      <Buffer />
    </div>
  );
};

const CarouselItem = ({
  scrollYProgress,
  position,
  numItems,
  img,
  title
}: {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
  img: string;
  title: string,
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;  

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className={`relative grid aspect-video w-full shrink-0 place-content-center h-full`}
    >
      <p className="absolute bottom-0 right-0 text-lg lg:text-3xl text-primary font-bold z-30 px-3">{title}</p>
      <img src={img} alt="" className="rounded-md opacity-90" />
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-24 w-full bg-gradient-to-b from-primary-50 to-primary-50/0 md:block" />
);

const Buffer = () => <div className="h-24 w-full md:h-48" />;