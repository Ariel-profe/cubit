'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, index, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: 'easeOut',
      }}
      className={cn(
        'group border-border/60 rounded-sm border',
        'transition-all duration-200 ease-in-out',
        isOpen ? 'bg-card/30 shadow-sm' : 'hover:bg-card/50',
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-4"
      >
        <h3
          className={cn(
            'text-left text-base font-medium transition-colors duration-200',
            isOpen && 'text-indigo-500',
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className={cn(
            'shrink-0 rounded-full p-0.5',
            'transition-colors duration-200',
            isOpen ? 'text-indigo-500' : 'text-muted-foreground',
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="border-border/40 border-t px-6 pt-2 pb-4">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                className="text-muted-foreground text-sm leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cuáles son los horarios de atención?',
      answer:
        'Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00. Estamos aquí para ayudarte en lo que necesites.',
    },
    {
      question: '¿Cómo recibo descuentos y promociones?',
      answer:
        'Registrando tu cuenta en nuestro sitio, recibirás automáticamente descuentos y promociones exclusivas.',
    },
    {
      question: '¿Cuánto tarda el envío?',
      answer:
        "El tiempo de envío puede variar según tu ubicación y el método de envío seleccionado. Por lo general, los pedidos se procesan en un plazo de 1 a 3 días hábiles y el envío puede tardar entre 5 y 10 días hábiles.",
    },
    {
      question: '¿Envían a mi país o ciudad?',
      answer:
        'Realizamos envíos a nivel provincial. Puedes verificar la disponibilidad de envío a tu ubicación durante el proceso de contacto con nuestro equipo.',
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer:
        'Aceptamos una amplia variedad de métodos de pago, incluyendo tarjetas de crédito, débito y transferencias bancarias. También ofrecemos opciones de pago a plazos para facilitar tu compra.',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-16">
      {/* Decorative elements */}
      <div className="bg-tertiary/5 absolute top-20 -left-20 h-64 w-64 rounded-full blur-3xl animate-pulse" />
      <div className="bg-tertiary/5 absolute -right-20 bottom-20 h-64 w-64 rounded-full blur-3xl animate-pulse" />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 text-center"
        >
          <span className="border rounded-full border-primary mb-4 px-3 py-1 text-xs font-medium tracking-wider uppercase">
            FAQs
          </span>

          <h2 className="from-primary mb-3 bg-gradient-to-r to-secondary bg-clip-text text-3xl font-bold text-transparent">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground text-sm">
            Todo lo que necesitas saber sobre Cubit
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
