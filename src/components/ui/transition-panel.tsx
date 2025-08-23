'use client';

import { useState } from 'react';

import { AnimatePresence, Transition, Variant, motion, MotionProps} from 'motion/react';
import { cn } from '@/lib/utils';

export type TransitionPanelProps = {
  children: React.ReactNode[];
  className?: string;
  transition?: Transition;
  activeIndex: number;
  variants?: { enter: Variant; center: Variant; exit: Variant };
} & MotionProps;

function TransitionPanelRoot({
  children,
  className,
  transition,
  variants,
  activeIndex,
  ...motionProps
}: TransitionPanelProps) {
  return (
    <div className={cn('relative', className)}>
      <AnimatePresence
        initial={false}
        mode='popLayout'
        custom={motionProps.custom}
      >
        <motion.div
          key={activeIndex}
          variants={variants}
          transition={transition}
          initial='enter'
          animate='center'
          exit='exit'
          {...motionProps}
        >
          {children[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

interface Props {
    items: { title: string; subtitle: string; content: string }[];
}

export function TransitionPanel({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='bg-primary p-8 rounded'>
      <div className='mb-4 flex space-x-2'>
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded px-3 py-1 text-sm font-medium cursor-pointer ${
              activeIndex === index
                ? 'bg-secondary text-white'
                : 'bg-slate-600 text-slate-300'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className='overflow-hidden border-t border-zinc-200'>
        <TransitionPanelRoot
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          variants={{
            enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
            center: { opacity: 1, y: 0, filter: 'blur(0px)' },
            exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
          }}
        >
          {items.map((item, index) => (
            <div key={index} className='py-2'>
              <h3 className='mb-2 font-medium text-slate-300'>
                {item.subtitle}
              </h3>
              <p className='text-slate-400 '>{item.content}</p>
            </div>
          ))}
        </TransitionPanelRoot>
      </div>
    </div>
  );
}
