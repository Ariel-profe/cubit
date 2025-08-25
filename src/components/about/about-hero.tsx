'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

import {Globe,Users,Heart,Lightbulb,Sparkles,Rocket,Target} from 'lucide-react';

import {FlipCard, Title, BorderBeam} from '@/components';
import { IoDiamondOutline } from 'react-icons/io5';

interface AboutUsProps {
  title?: string;
  subtitle?: string;
  mission?: string;
  vision?: string;
  values?: Array<{
    title: string;
    description: string;
    icon: keyof typeof iconComponents;
  }>;
  className?: string;
}

const iconComponents = {
  Users: Users,
  Heart: Heart,
  Lightbulb: Lightbulb,
  Globe: Globe,
  Sparkles: Sparkles,
  Rocket: Rocket,
  Target: Target,
};

const defaultValues: AboutUsProps['values'] = [
  {
    title: 'Innovación',
    description:
      'Fomentamos la innovación y la creatividad en todos los aspectos de nuestro trabajo.',
    icon: 'Lightbulb',
  },
  {
    title: 'Colaboración',
    description:
      'Creemos en el poder del trabajo en equipo y las perspectivas diversas para lograr resultados extraordinarios.',
    icon: 'Users',
  },
  {
    title: 'Excelencia',
    description:
      'Buscamos la perfección en todo lo que hacemos, entregando constantemente un trabajo de alta calidad.',
    icon: 'Sparkles',
  },
  {
    title: 'Impacto',
    description:
      "Medimos nuestro éxito por la diferencia positiva que hacemos en la vida y los negocios de las personas.",
    icon: 'Globe',
  },
];

export const AboutHero = () => {
  const aboutData = {
    title: 'Nuestra empresa',
    subtitle:
      'Te acercamos los productos de ultima tecnologia a tu casa.',
    mission:
      'Nuestra misión es democratizar el desarrollo web al proporcionar componentes personalizables y de alta calidad que ayudan a los desarrolladores a crear sitios web impresionantes de manera rápida y eficiente.',
    vision:
      'Imaginamos un mundo donde la creación de sitios web hermosos sea accesible para todos, independientemente de su experiencia en diseño o desarrollo.',
    values: defaultValues,
    className: 'relative overflow-hidden py-20',
  };

  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <Title title={aboutData.title} />
          <p className="text-muted-foreground mt-6 text-xl">
            {aboutData.subtitle}
          </p>
        </motion.div>

        {/* Mission & Vision Section */}
        <div ref={missionRef} className="relative mx-auto mb-24 ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative z-10 grid gap-12 md:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group border-border/40 relative block overflow-hidden rounded-sm border bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="via-violet-500 from-transparent to-transparent"
              />

              <div className="from-primary/20 to-primary/5 mb-6 inline-flex aspect-square h-16 w-16 flex-1 items-center justify-center rounded-2xl bg-gradient-to-br backdrop-blur-sm">
                <Target className="text-violet-500 h-8 w-8" />
              </div>

              <div className="space-y-4">
                <h2 className="text-violet-500 mb-4 text-3xl font-bold">
                  Nuestra Misión
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {aboutData.mission}
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group border-border/40 relative block overflow-hidden rounded-sm border bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-emerald-500 to-transparent"
                reverse
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
                <Rocket className="h-8 w-8 text-emerald-500" />
              </div>

              <h2 className="mb-4 text-3xl font-bold text-emerald-500">
                Nuestra Visión
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {aboutData.vision}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group border-border/40 relative block overflow-hidden rounded-sm border bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-rose-500 to-transparent"
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
                <IoDiamondOutline className="h-8 w-8 text-rose-500" />
              </div>

              <h2 className="mb-4 text-3xl font-bold text-rose-500">
                Nuestros Valores
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {aboutData.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12 text-center"
          >
            <h2 className="from-slate-400 via-slate-200 to-secondary bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Lo que nos identifica
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              Los principios que guían todo lo que hacemos y cada decisión que
              tomamos.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutData.values?.map((value, index) => {
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                    <FlipCard data={value} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
