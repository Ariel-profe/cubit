'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

import {Globe,Users,Heart,Lightbulb,Sparkles,Rocket,Target} from 'lucide-react';

import {FlipCard, Title} from '@/components';
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
    features?: string[];
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
    features: [
      'Fomentamos un ambiente donde las ideas innovadoras pueden florecer.',
      'Apoyamos la experimentación y la toma de riesgos calculados.',
      'Celebramos los fracasos como oportunidades de aprendizaje.'
    ]
  },
  {
    title: 'Colaboración',
    description:
      'Creemos en el poder del trabajo en equipo y las perspectivas diversas para lograr resultados extraordinarios.',
    icon: 'Users',
    features: [
      'Fomentamos un ambiente de colaboración donde todos pueden contribuir.',
      'Valoramos la diversidad de pensamiento y experiencia en nuestro equipo.',
      'Creemos que el trabajo en equipo produce los mejores resultados.'
    ]
  },
  {
    title: 'Excelencia',
    description:
      'Buscamos la perfección en todo lo que hacemos, entregando constantemente un trabajo de alta calidad.',
    icon: 'Sparkles',
    features: [
      'Fomentamos un ambiente donde la excelencia es la norma.',
      'Nos comprometemos a la mejora continua en todos los aspectos de nuestro trabajo.',
      'Celebramos los logros y aprendemos de los fracasos.'
    ]
  },
  {
    title: 'Impacto',
    description:
      "Medimos nuestro éxito por la diferencia positiva que hacemos en la vida y los negocios de las personas.",
    icon: 'Globe',
    features: [
      'Fomentamos un enfoque centrado en el cliente en todo lo que hacemos.',
      'Buscamos constantemente formas de mejorar y agregar valor a nuestros clientes.',
      'Celebramos los éxitos de nuestros clientes como nuestros propios éxitos.'
    ]
  },
];

export const Identifications = () => {

  const valuesRef = useRef(null);

  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10">
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
            {defaultValues.map((value, index) => {
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
